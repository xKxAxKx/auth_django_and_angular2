from django.contrib.auth import update_session_auth_hash
from rest_framework import serializers

from .models import Account, AccountManager


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'username', 'email', 'profile', 'password')

    def create(self, validated_data):
        return Account.objects.create_user(request_data=validated_data)

    def update(self, instance, validated_data):
        if 'user' in validated_data:
            user_instance = instance.user
            user = validated_data.pop('user')
            if 'email' in user:
                user_instance.email = user['email']
            if 'username' in user:
                user_instance.username = user['username']
            user_instance.save()
        instance = super().update(instance, validated_data)
        return instance
