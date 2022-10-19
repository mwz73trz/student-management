from pyexpat import model
from rest_framework.serializers import ModelSerializer
from .models import Student

class StudentSerializer(ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'first_name', 'last_name', 'registration_number', 'email', 'course']