FROM ubuntu 

COPY . .
RUN apt update 
#RUN curl -sL https://rpm.nodesource.com/setup_10.x | bash 
RUN apt install -y nodejs && apt-get install ruby-full -y && apt-get install -y ruby-dev &&  gem install bundler && bundle install



#RUN chmod +x entrypoint.sh
ENTRYPOINT [ "./entrypoint.sh" ]


