# Generated by Django 2.0.2 on 2020-12-27 04:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_zorasnippet'),
    ]

    operations = [
        migrations.CreateModel(
            name='CodeSnippet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('snippet_name', models.CharField(max_length=191)),
                ('language', models.CharField(choices=[('PYTHON', 'PYTHON'), ('JAVASCRIPT', 'JAVASCRIPT'), ('SCALA', 'SCALA'), ('BASH', 'BASH'), ('SQL', 'SQL'), ('YAML', 'YAML'), ('HCL', 'HCL')], max_length=191)),
                ('category', models.CharField(choices=[('DATA_SCIENCE', 'DATA_SCIENCE'), ('DEV_OPS', 'DEV_OPS'), ('BACK_END', 'BACK_END'), ('FRONT_END', 'FRONT_END'), ('ANALYTICS', 'ANALYTICS')], max_length=191)),
                ('github_file_name', models.TextField()),
                ('preview', models.CharField(max_length=191)),
                ('description', models.TextField()),
            ],
        ),
    ]
