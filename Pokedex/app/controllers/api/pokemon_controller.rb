class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find_by(id: params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :create
    else
      render json: @pokemon.errors.full_messages
    end
  end

  def update

  end

  def destroy

  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:attack, :defense, :image_url, :name, :poke_type, :item_ids)
  end
end
