FROM python:3

ADD requirements.txt /app/
RUN pip install -r app/requirements.txt

ADD . /app/

EXPOSE 8000

CMD python /app/manage.py runserver 8000