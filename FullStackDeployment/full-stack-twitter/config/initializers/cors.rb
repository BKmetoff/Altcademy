Rails.application.config.middleware.insert.before 0, Rack::Cors do
  allow do
    origin 'http://localhost:3000'
    resource '*', headers: :any, methods: %i[get post put patch delete options head], credentials: true
  end

  allow do
    origin 'https://not-a-twitter-clone.heroku.com'
    resource '*', headers: :any, methods: %i[get post put patch delete options head], credentials: true
  end
end
