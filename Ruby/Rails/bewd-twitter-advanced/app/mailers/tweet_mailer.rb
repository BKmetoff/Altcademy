# frozen_string_literal: true

class TweetMailer < ApplicationMailer
  def notify(tweet)
    @tweet = tweet
    @user = tweet.user
    mail(to: @user.email, subject: 'Your Tweet has been posted successfully')
  end
end
