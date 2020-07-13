# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: 'bkmetoff@gmail.com'
  layout 'mailer'
end
