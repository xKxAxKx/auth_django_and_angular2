from django.contrib.auth import update_session_auth_hash

from rest_framework import serializers

from .models import Account


class AccountSerializer(serializers.ModelSerializer):
    profile = serializers.CharField()
    email = serializers.EmailField()
    username = serializers.CharField()
    password = serializers.CharField()
