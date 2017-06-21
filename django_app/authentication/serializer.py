from django.contrib.auth import update_session_auth_hash
from rest_framework import serializers

from .models import Account, AccountManager


class AccountSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = Account
        fields = ('id', 'username', 'email', 'profile', 'password', )

    def create(self, validated_data):
        return Account.objects.create_user(request_data=validated_data)

    # def update(self, instance, validated_data):
    #     instance.username = validated_data.get('username', instance.username)
    #     instance.email = validated_data.get('email', instance.email)
    #     instance.profile = validated_data.get('profile', instance.profile)
    #     instance = super().update(instance, validated_data)
    #     return instance
