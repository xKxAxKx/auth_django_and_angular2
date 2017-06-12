from django.conf.urls import include, url
from .views import AuthRegister

urlpatterns = [
    url(r'^register/$', AuthRegister.as_view()),
]
