# Generated by Django 5.0.4 on 2024-06-02 06:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_message'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='subject',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
