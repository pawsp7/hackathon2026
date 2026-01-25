# variables 

class Event:
    def __init__(self, name, dialouge, option_a, a_fund, a_happy, a_stress, option_b, b_fund, b_happy, b_stress):
        self.name = name
        self.dialouge = dialouge 
        self.option_a = option_a
        self.a_fund = a_fund
        self.a_happy = a_happy
        self.a_stress = a_stress
        self.option_b = option_b
        self.b_fund = b_fund
        self.b_happy = b_happy
        self.b_stress = b_stress

Event = ["Coworker sick", "Your coworker called in sick. You're offered their 5 hour shift, do you take it?", "Yes", 75, -1, 1, "No", 0, 0, 0]
# Events = ["event_name", "Event text", "option X text",  X fund modification, X happiness modification, X stress modification, "option Y text",  Y fund modification, Y happiness modification, Y stress modification] 
wants = [{event_name}, {expense_value}] #lists or arrays or smth 
needs = [{event_name}, {income_value}]

# --------------------------------------------
# | Your coworker called in sick. You're offered their 5 hour shift, do you take it? |
#                        > YES <            > NO <

if {option_a}:
    funds += a_fund
    happy += a_happy
    stress += a_stress
else
    funds += b_fund
    happy += b_happy
    stress += a_stress
    
# YES
# +$75    -1 Happiness      +1 Stress

# NO
# You went on with your day as normal
# ----------------------------------------------

#inital starting values
funds = 0 #running total to be modified by income and expenses
income = 0 #will be modified by rng events and wage
expenses = 0 #will be modified by rng events, rent and bills
happiness = 0
stress = 0
wage = 1200 #set for default $15/hr 40 hour week paid bi-weekly (every 14th day)
bills = 150 #static unless modifers are added 
rent = 1000 #static
day = 0 #increment per day cycle, allows every 14th day to trigger income and budget review display (as a pop-up)
active_event = 0 #roll to random value and pull indexed event details
