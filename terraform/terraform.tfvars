aws_region = "us-east-1"
aws_profile = "sanjeev_personal"
availability_zones = ["us-east-1a", "us-east-1b"]
public_subnet_1_cidr = "10.0.1.0/24"
public_subnet_2_cidr = "10.0.2.0/24"
private_subnet_1_cidr = "10.0.3.0/24"
private_subnet_2_cidr = "10.0.4.0/24"
health_check_path = "/ping/"
ecs_cluster_name = "production"
log_retention_in_days = 30
ssh_pubkey_file = "~/.ssh/id_rsa.pub"
amis = {us-east-1 = "ami-0669eafef622afea1"}
instance_type = "t2.micro"
docker_image_url_django = "501421885392.dkr.ecr.us-east-1.amazonaws.com/personal-site:latest"
app_count = 2
autoscale_min = 1
autoscale_max = 10
autoscale_desired = 4