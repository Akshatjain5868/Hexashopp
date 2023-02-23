class CraftStoresController < ApplicationController
  before_action :set_craft_store, only: %i[ show edit update destroy ]
  before_action :admin_logged_in?

  # GET /craft_stores or /craft_stores.json
  def index
    @craft_stores = CraftStore.all
  end

  # GET /craft_stores/1 or /craft_stores/1.json
  def show
    @craft_store = CraftStore.find(params[:id])
  end

  # GET /craft_stores/new
  def new
    @craft_store = CraftStore.new
  end

  # GET /craft_stores/1/edit
  def edit
  end

  # POST /craft_stores or /craft_stores.json
  def create
    @craft_store = CraftStore.new(craft_store_params)

    respond_to do |format|
      if @craft_store.save
        format.html { redirect_to craft_store_url(@craft_store), notice: "Craft store was successfully created." }
        format.json { render :show, status: :created, location: @craft_store }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @craft_store.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /craft_stores/1 or /craft_stores/1.json
  def update
    respond_to do |format|
      if @craft_store.update(craft_store_params)
        format.html { redirect_to craft_store_url(@craft_store), notice: "Craft store was successfully updated." }
        format.json { render :show, status: :ok, location: @craft_store }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @craft_store.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /craft_stores/1 or /craft_stores/1.json
  def destroy
    @craft_store.destroy

    respond_to do |format|
      format.html { redirect_to craft_stores_url, notice: "Craft store was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  def admin_logged_in?
    if session[:admin].nil?
      flash[:notice] ="You need to do admin login to continue"
      redirect_to admin_login_url
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_craft_store
      @craft_store = CraftStore.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def craft_store_params
      params.require(:craft_store).permit(:name, :description, :price, item_images: [])
    end
end
