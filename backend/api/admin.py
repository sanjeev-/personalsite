# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.

from api.models import User, UserManager, ZoraSnippet, CodeSnippet

admin.site.register(ZoraSnippet)
admin.site.register(User)
admin.site.register(CodeSnippet)
