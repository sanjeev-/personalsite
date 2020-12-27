from graphene_django import DjangoObjectType
from api.models import User, ZoraSnippet, CodeSnippet

import graphene


class UserType(DjangoObjectType):
    class Meta:
        model = User


class ZoraSnippetType(DjangoObjectType):
    class Meta:
        model = ZoraSnippet


class CodeSnippetType(DjangoObjectType):
    class Meta:
        model = CodeSnippet


class Query(graphene.ObjectType):
    users = graphene.List(UserType)
    retrieve_zora_snippets = graphene.List(ZoraSnippetType)
    retrieve_code_snippets = graphene.List(CodeSnippetType)

    def resolve_users(self, info):
        return User.objects.all()

    def resolve_retrieve_zora_snippets(self, info):
        return ZoraSnippet.objects.all()

    def resolve_retrieve_code_snippets(self, info):
        return CodeSnippet.objects.all()


schema = graphene.Schema(query=Query)
