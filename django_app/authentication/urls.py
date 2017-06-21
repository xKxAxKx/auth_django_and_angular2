from django.conf.urls import include, url
from rest_framework import routers
from .views import AuthRegister, UserListView, AuthInfoGetView, AuthInfoUpdateView

urlpatterns = [
    url(r'^user_info/$', UserListView.as_view()), #あとで消す
    url(r'^register/$', AuthRegister.as_view()),
    url(r'^mypage/$', AuthInfoGetView.as_view()),
    url(r'^auth_update/?$', AuthInfoUpdateView.as_view()),
]
