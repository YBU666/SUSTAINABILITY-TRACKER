from django.urls import path # type: ignore
from .views import ActionListCreateView, ActionRetrieveUpdateDestroyView

urlpatterns = [
    path('actions/', ActionListCreateView.as_view(), name='action-list-create'),
    path('actions/<int:pk>/', ActionRetrieveUpdateDestroyView.as_view(), name='action-detail'),
]
