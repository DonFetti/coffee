ratio=17
amount_wanted=300
iced=False
beans_needed=amount_wanted/(ratio-2)
water_needed=amount_wanted+(beans_needed*2)
if iced:
    ice_needed=water_needed*0.38
    hot_water_needed=water_needed*0.62
    print(f"For {amount_wanted} iced coffee you need {beans_needed}g of beans, {ice_needed}ml of ice, and {hot_water_needed}ml of hot water")
else:
    print(f"For {amount_wanted} coffee you need {beans_needed}g of beans and {water_needed}ml of water")
