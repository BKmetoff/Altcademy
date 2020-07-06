# frozen_string_literal: true

class JobsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @jobs = Job.all
    render 'jobs/index'
  end

  def create
    @job = Job.create(
      job_title: params[:job_title],
      employer_name: params[:employer_name],
      employer_description: params[:employer_description]
    )
    render 'jobs/create'

    # @job = Job.new(job_params)
  end

  def show
    @job = Job.find_by(id: params[:id])
    render 'jobs/show'
  end

  # def job_params
  #   params.require(:job)
  # end
end
