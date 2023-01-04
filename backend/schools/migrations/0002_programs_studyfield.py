# Generated by Django 4.0.5 on 2022-12-25 11:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schools', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Programs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255)),
                ('duration', models.IntegerField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='StudyField',
            fields=[
                ('name', models.CharField(blank=True, max_length=255)),
                ('field_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
            ],
        ),
    ]