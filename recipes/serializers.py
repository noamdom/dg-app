from pprint import pprint

from rest_framework import serializers
from .models import *


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        # fields = "__all__"
        fields = ('entity_id', 'entity_alias_readable', 'category')


class AromaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aroma
        fields = '__all__'


class TasteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Taste
        fields = '__all__'


class SingleRecipeIngredientSerializer(serializers.ModelSerializer):
    aromas = serializers.SerializerMethodField()
    # land_use = serializers.SerializerMethodField()
    tastes = serializers.SerializerMethodField()
    env_impact = serializers.SerializerMethodField()
    category = serializers.SerializerMethodField()

    class Meta:
        model = SingleRecipeIngredient
        # fields = ('id', 'name', 'entity_id', 'min', 'max', 'value',
        #           'aromas',  'single_recipe', )
        fields = ('id', 'name', 'entity_id', 'category', 'min', 'max', 'value', 'unit', 'unit_convertor_g',
                  'aromas', 'tastes', 'env_impact', 'single_recipe')
        extra_kwargs = {
            # 'ingredient recipe number': {'source': 'id'},
            'single_recipe': {'write_only': True},
        }

    def get_aromas(self, ing):
        # return "aroma data..."
        aroma = Aroma.objects.filter(entity_id=ing.entity_id).values()
        return aroma[0]  # [0]  because filter return array


    def get_env_impact(self, ing):
        # return "land use data..."
        env_impact = EnvironmentalImpact.objects.filter(entity_id=ing.entity_id).values()
        if env_impact:
            return env_impact[0]
        else:
            return []

    def get_tastes(self, ing):
        # return "taste data..."
        tastes = Taste.objects.filter(entity_id=ing.entity_id).values()
        if tastes:
            return tastes[0]
        else:
            return []

    def get_category(self, ing):
        data = Ingredient.objects.get(pk=ing.entity_id)
        return data.category


class SingleRecipeSerializer(serializers.ModelSerializer):
    ingredients = serializers.SerializerMethodField()

    class Meta:
        model = SingleRecipe
        fields = ('id', 'diet', 'metarecipe')
        fields = ('id', 'diet', 'ingredients', 'metarecipe')
        extra_kwargs = {

            'metarecipe': {'write_only': True},
        }

    def get_ingredients(self, recipe):
        ingredients_by_recipe = SingleRecipeIngredient.objects.filter(single_recipe=recipe.id)
        return SingleRecipeIngredientSerializer(ingredients_by_recipe, many=True).data


def noramlize_value(val, min, max):
    return (val * (max - min) + min)


def env_impact_score(env_score, ing_factor, convertor):
    return env_score * ing_factor * convertor


class MetaRecipeSerializer(serializers.ModelSerializer):
    recipes = serializers.SerializerMethodField()
    # land_use_avg = serializers.SerializerMethodField()
    env_impact_avg = serializers.SerializerMethodField()

    class Meta:
        model = MetaRecipe
        fields = ('id', 'name', 'recipes', "env_impact_avg")

    def get_recipes(self, metarecipe):
        single_recipes_by_metarecipe = SingleRecipe.objects.filter(metarecipe=metarecipe.id)
        return SingleRecipeSerializer(single_recipes_by_metarecipe, many=True).data


    def get_env_impact_avg(self, metarecipe):
        single_recipes_by_metarecipe = self.get_recipes(metarecipe)
        avg_factor = 1 / len(single_recipes_by_metarecipe)
        metarecipe_env_impact_avg = {
            "land_use": 0,
            "ghg": 0,
            "acid": 0,
            "eutrophy": 0,
            "freshwater": 0,
        }

        for recipe in single_recipes_by_metarecipe:
            #  score for each scale by ingredient
            for ing in recipe['ingredients']:
                val = ing['value']
                factor = noramlize_value(val, ing['min'], ing['max'])
                env_impact = ing['env_impact']
                if val > 0:
                    convertor = ing['unit_convertor_g']
                    metarecipe_env_impact_avg['land_use'] += env_impact_score(env_impact['land_use'], factor,
                                                                              convertor) * avg_factor
                    metarecipe_env_impact_avg['ghg'] += env_impact_score(env_impact['ghg_emissions'], factor,
                                                                         convertor) * avg_factor

                    metarecipe_env_impact_avg['acid'] += env_impact_score(env_impact['acidifying_emissions'],
                                                                          factor,
                                                                          convertor) * avg_factor
                    metarecipe_env_impact_avg['eutrophy'] += env_impact_score(env_impact['eutrophying_emissions'],
                                                                              factor,
                                                                              convertor) * avg_factor
                    metarecipe_env_impact_avg['freshwater'] += env_impact_score(env_impact['freshwater_withdrawals'],
                                                                                factor,
                                                                                convertor) * avg_factor

        return metarecipe_env_impact_avg


class EnvironmentalImpactSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnvironmentalImpact
        fields = '__all__'

# class IngOfRecipeSerializer(serializers.ModelSerializer):
#     aromas = serializers.SerializerMethodField()
#     land_use = serializers.SerializerMethodField()
#
#     class Meta:
#         model = IngredientOfRecipe
#         fields = ('id', 'name', 'entity_id', 'min', 'max', 'kosher_value', 'vegan_value', 'ketogenic_value',
#                   'recipe', 'aromas', 'land_use')
#         extra_kwargs = {
#             # 'house': {'write_only': True},
#             'recipe': {'write_only': True},
#         }
#
#     def get_aromas(self, ing):
#         aroma = Aroma.objects.filter(entity_id=ing.entity_id).only('entity_id', 'entity_alias_readable').values()
#         return aroma[0]
#
#     def get_land_use(self, ing):
#         land_use = LandUse.objects.filter(entity_id=ing.entity_id).values()
#         return land_use[0]

#
# class RecipeSerializer(serializers.ModelSerializer):
#     # ingredients = IngOfRecipeSerializer(many=True)
#     # recipe_ing = serializers.SerializerMethodField()
#
#     class Meta:
#         model = Recipe
#         fields = "__all__"
#         # fields = ('url', 'id', 'diet', 'name', 'category')
#         fields = ('id', 'diet', 'name', 'category', 'recipe_ing')
#         # extra_kwargs = {
#         #     'ingredients': {'read_only': True}
#     # }
#
# def get_recipe_ing(self, recipe):
#     ings = IngredientOfRecipe.objects.filter(recipe=recipe.id)
#     return IngOfRecipeSerializer(ings, many=True).data

#     # depth = 1
#
# def create(self, validated_data):
#     ingredients = validated_data.pop('ingredients')
#     recipe = Recipe.objects.create(**validated_data)
#     for ing in ingredients:
#         IngredientOfRecipe.objects.create(**ing, recipe=recipe)
#     return recipe


#
# class LandUseSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = LandUse
#         fields = '__all__'

#
# class TestRecipeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = TestRecipe
#         fields = '__all__'

#
# class RecipeIngsSerializer(serializers.Serializer):
#     # recipe_ings = serializers.SerializerMethodField()
#     # recipe_ings = serializers.PrimaryKeyRelatedField(queryset=IngOfRecipe.objects.all())
#
#     # class Meta:
#     #     fields = '__all__'
#
#     rate = serializers.IntegerField()
#     min = serializers.IntegerField(default=0)
#     max = serializers.IntegerField(default=0)
#
#     def get_recipe_ings(self, instance):
#         ings = IngredientOfRecipe.object.filter(recipe=instance)
#         return IngOfRecipeSerializer(ings, many=True)

#
class RecipeNamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = MetaRecipe
        fields = ('id', 'name')
        extra_kwargs = {
            'name': {'read_only': True}
        }
