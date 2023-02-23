require "test_helper"

class CraftStoresControllerTest < ActionDispatch::IntegrationTest
  setup do
    @craft_store = craft_stores(:one)
  end

  test "should get index" do
    get craft_stores_url
    assert_response :success
  end

  test "should get new" do
    get new_craft_store_url
    assert_response :success
  end

  test "should create craft_store" do
    assert_difference('CraftStore.count') do
      post craft_stores_url, params: { craft_store: { description: @craft_store.description, name: @craft_store.name, price: @craft_store.price } }
    end

    assert_redirected_to craft_store_url(CraftStore.last)
  end

  test "should show craft_store" do
    get craft_store_url(@craft_store)
    assert_response :success
  end

  test "should get edit" do
    get edit_craft_store_url(@craft_store)
    assert_response :success
  end

  test "should update craft_store" do
    patch craft_store_url(@craft_store), params: { craft_store: { description: @craft_store.description, name: @craft_store.name, price: @craft_store.price } }
    assert_redirected_to craft_store_url(@craft_store)
  end

  test "should destroy craft_store" do
    assert_difference('CraftStore.count', -1) do
      delete craft_store_url(@craft_store)
    end

    assert_redirected_to craft_stores_url
  end
end
