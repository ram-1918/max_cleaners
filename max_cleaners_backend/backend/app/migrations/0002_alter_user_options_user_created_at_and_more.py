# Generated by Django 4.1.13 on 2024-07-08 23:23

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="user",
            options={"verbose_name_plural": "Users"},
        ),
        migrations.AddField(
            model_name="user",
            name="created_at",
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name="user",
            name="last_modified",
            field=models.DateTimeField(
                auto_now_add=True, default=django.utils.timezone.now
            ),
            preserve_default=False,
        ),
    ]
