class StaticPagesController < ApplicationController
  def home
    render 'application'
  end

  def history
    render 'history'
  end

  def leaderhoard
    render 'leaderboard'
  end
end
