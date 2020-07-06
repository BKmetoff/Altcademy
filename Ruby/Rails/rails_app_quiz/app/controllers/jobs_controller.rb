# frozen_string_literal: true

class JobsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @job = Job.create(
      job_title: params[:job_title],
      employer_name: params[:employer_name],
      employer_description: params[:employer_description]
    )
    render 'jobs/create'

    # @job = Job.new(job_params)
  end

  # def job_params
  #   params.require(:job)
  # end
end
