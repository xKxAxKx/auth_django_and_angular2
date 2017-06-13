from django.contrib.auth import update_session_auth_hash
from rest_framework import serializers

from .models import Account, AccountManager


class AccountSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        return AccountManager.create_user(**validated_data)

    class Meta:
        model = Account
        fields = ('id', 'username', 'email', 'profile', 'password')
