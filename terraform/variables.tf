# aws config

variable "aws_region" {
  type = string
  description = "Administrator user name for virtual machine"
}

variable "aws_profile" {
  type = string
  description = "AWS profile to use"
}

# networking

variable "public_subnet_1_cidr" {
  description = "CIDR Block for Public Subnet 1"
}
variable "public_subnet_2_cidr" {
  description = "CIDR Block for Public Subnet 2"
}
variable "private_subnet_1_cidr" {
  description = "CIDR Block for Private Subnet 1"
}
variable "private_subnet_2_cidr" {
  description = "CIDR Block for Private Subnet 2"
}
variable "availability_zones" {
  description = "Availability zones"
  type        = list(string)
}

# load balancer

variable "health_check_path" {
  description = "Health check path for the default target group"
}

# logs

variable "log_retention_in_days" {
  description = "How many days we retain logs for"
}

# key pair

variable "ssh_pubkey_file" {
  description = "Path to an SSH public key"
}

# ecs

variable "ecs_cluster_name" {
  description = "Name of the ECS cluster"
}
variable "amis" {
  description = "Which AMI to spawn."
}
variable "instance_type" {
}
variable "docker_image_url_django" {
  description = "Docker image to run in the ECS cluster"
}
variable "app_count" {
  description = "Number of Docker containers to run"
}

# auto scaling

variable "autoscale_min" {
  description = "Minimum autoscale (number of EC2)"
}
variable "autoscale_max" {
  description = "Maximum autoscale (number of EC2)"
}
variable "autoscale_desired" {
  description = "Desired autoscale (number of EC2)"
}