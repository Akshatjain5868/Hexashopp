require "application_system_test_case"

class CraftStoresTest < ApplicationSystemTestCase
  setup do
    @craft_store = craft_stores(:one)
  end

  test "visiting the index" do
    visit craft_stores_url
    assert_selector "h1", text: "Craft Stores"
  end

  test "creating a Craft store" do
    visit craft_stores_url
    click_on "New Craft Store"

    fill_in "Description", with: @craft_store.description
    fill_in "Name", with: @craft_store.name
    fill_in "Price", with: @craft_store.price
    click_on "Create Craft store"

    assert_text "Craft store was successfully created"
    click_on "Back"
  end

  test "updating a Craft store" do
    visit craft_stores_url
    click_on "Edit", match: :first

    fill_in "Description", with: @craft_store.description
    fill_in "Name", with: @craft_store.name
    fill_in "Price", with: @craft_store.price
    click_on "Update Craft store"

    assert_text "Craft store was successfully updated"
    click_on "Back"
  end

  test "destroying a Craft store" do
    visit craft_stores_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Craft store was successfully destroyed"
  end
end
