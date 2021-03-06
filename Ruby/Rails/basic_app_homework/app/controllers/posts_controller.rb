# frozen_string_literal: true

class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    @post = Post.create(
      content: params[:content],
      user_id: params[:user_id]
    )
    render 'posts/create.jbuilder'
  end

  def list
    @posts = Post.all
    render 'posts/list.jbuilder'
  end

  def show
    @post = Post.find(params[:id])
    render 'posts/show.jbuilder'
  end

  def update
    @post = Post.find(params[:id])
    @post.update_attribute :content, params[:content]
    render 'posts/update.jbuilder'
  end

  def delete
    @post = Post.find(params[:id]).destroy
    render 'posts/delete.jbuilder'
    # TO DO: display a message after un/successful deletion
  end
end
