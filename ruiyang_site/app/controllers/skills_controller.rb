class SkillsController < ApplicationController
  def index
    @skills = Skill.all
  end

  def show

  end
  
  def new
    @skill = Skill.new
  end

  def create

  end

  def edit

  end

  def update

  end

  def destroy

  end
end
