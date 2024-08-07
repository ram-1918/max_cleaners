# Generated by Django 4.1.13 on 2024-07-09 14:41

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0008_rename_isadmin_users_is_admin_alter_users_addresses_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("fullname", models.CharField(blank=True, max_length=30)),
                ("email", models.EmailField(max_length=254, unique=True)),
                ("password", models.CharField(blank=True, max_length=16)),
                ("phone", models.CharField(blank=True, max_length=16)),
                ("addresses", models.JSONField()),
                (
                    "starch",
                    models.CharField(
                        choices=[
                            ("low", "Low"),
                            ("medium", "Medium"),
                            ("high", "High"),
                        ],
                        default="low",
                        max_length=7,
                    ),
                ),
                ("location", models.CharField(blank=True, max_length=20)),
                ("isadmin", models.BooleanField(default=False)),
                ("created_at", models.DateTimeField(auto_now=True)),
                ("last_modified", models.DateTimeField(auto_now_add=True)),
            ],
            options={
                "verbose_name_plural": "User",
            },
        ),
        migrations.DeleteModel(
            name="Users",
        ),
    ]
