from django.conf.urls import include, url
from rest_framework import routers
from .views import AuthRegister, UserListView, AuthRetrieveUpdateView

urlpatterns = [
    url(r'^register/$', AuthRegister.as_view()),
    url(r'^user_info/$', UserListView.as_view()),
    url(r'^mypage/$', AuthRetrieveUpdateView.as_view()),
]
