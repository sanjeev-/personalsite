from graphene_django import DjangoObjectType
from api.models import User, ZoraSnippet

import graphene


class UserType(DjangoObjectType):
    class Meta:
        model = User


class ZoraSnippetType(DjangoObjectType):
    class Meta:
        model = ZoraSnippet


class Query(graphene.ObjectType):
    users = graphene.List(UserType)
    retrieve_zora_snippets = graphene.List(ZoraSnippetType)

    def resolve_users(self, info):
        return User.objects.all()

    def resolve_retrieve_zora_snippets(self, info):
        return ZoraSnippet.objects.all()


schema = graphene.Schema(query=Query)
