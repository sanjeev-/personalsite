# pull official base image
FROM python:3.8.3-alpine

# Set working dir
WORKDIR /app/backend

# Install requirements
COPY requirements.txt .
RUN pip3 install --upgrade pip -r requirements.txt

# Copy app files
COPY . .

EXPOSE 8000

CMD python3 manage.py runserver 0.0.0.0:8000
