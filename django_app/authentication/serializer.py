from django.contrib.auth import update_session_auth_hash

from rest_framework import serializers

from .models import Account


class AccountSerializer(serializers.ModelSerializer):
    company = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField()
