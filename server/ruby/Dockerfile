# Dockerfile.rails
FROM ruby:3.2.2 AS rails-toolbox

RUN apt-get update && apt-get install -y nodejs
WORKDIR /app
COPY Gemfile* .
RUN bundle install
COPY . .
EXPOSE 3000
CMD ["rails", "s", "-b", "0.0.0.0"]