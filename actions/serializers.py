from rest_framework import serializers # type: ignore
from .models import SustainabilityAction

class SustainabilityActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SustainabilityAction  # Ensure this model exists
        fields = '__all__'

