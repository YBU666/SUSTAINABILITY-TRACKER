from django.shortcuts import render # type: ignore

from rest_framework import generics # type: ignore
from .models import SustainabilityAction
from .serializers import SustainabilityActionSerializer

class ActionListCreateView(generics.ListCreateAPIView):
    queryset = SustainabilityAction.objects.all()
    serializer_class = SustainabilityActionSerializer

class ActionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SustainabilityAction.objects.all()
    serializer_class = SustainabilityActionSerializer

