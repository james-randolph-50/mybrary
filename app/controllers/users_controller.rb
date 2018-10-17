class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render json: @user
        else
            render json: { errors: {message: "User could not be saved."}}
        end
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def edit
        @user = User.find(params[:id])
    end

    def update
        @user = User.find(params[:id])
        @user.update(user_params)
        render json: @user
    end

    private

    def user_params
        params.require(:user).permit(:name, :books_read)
    end

end
