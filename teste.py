django-admin startproject my_tennis_club
python .\manage.py startapp guiaFlex
python manage.py runserver
python manage.py makemigrations members
python manage.py migrate
python manage.py sqlmigrate guiaFlex 0001
python manage.py createsuperuser