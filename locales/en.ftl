
language-local-string = en-GB

#Charge steps
charging-steps-connect-title = Connecting your charger
charging-steps-connect-description = It may take a few seconds to connect

charging-steps-plugin-title = Plug in your car
charging-steps-plugin-description = Please plug in your car and when you are ready press "Done"

charging-start = Start charge
charging-continue = Continue to charge
charging-stop = Stop Charge

error-payment-title = Payment error
error-payment-description = We encountered an error while processing your payment

// packages/alternator-ui/src/locales/en.ftl
charging-error-rejected-title = Session Rejected
charging-error-rejected-text = Your request was rejected by the charge point. This can happen if your car was plugged in too early or too late, or if there was an issue with the charger. Please check that you followed our instructions correctly or contact us for assistance.

button-contact-support = Contact support
button-try-again = Try again
button-keep-waiting = Keep waiting
button-try-another-charger = Try another charger
button-session-close = Close
button-update-payment = Update payment
button-retry-payment = Retry payment

charging-error-request-denied-title = Request denied
charging-error-request-denied-text = Unfortunately, your charging request was not accepted by the charging network. Please contact our support team or try charging again.

charging-error-timeout-title = Timeout
charging-error-timeout-text = We haven't heard from the charging network in a while. We suggest trying another charger or you can unplug and wait five minutes before trying again.

charging-error-session-title = Ongoing session
charging-error-session-text = It looks like you have already initiated a session, which should start soon. Please wait a few minutes before trying again.

charging-error-auth-title = Authorisation error
charging-error-auth-text = There seems to be a problem with your account. Please reach out to our support team so

charging-error-server-title = Server error
charging-error-ongoing-server-request-text = Oops! We encountered an error while processing your request on our server. Please contact our support team to resolve the issue, or try again later.

charging-error-payment-title = Payment error
charging-error-payment-text = We encountered an error while processing your payment authorisation. The error message is 

charging-error-failed-payment-text = We encountered an error while processing your previous payment. The error message is 


#components
#AddPaymentToast
add-payment-method = Add payment method
add-payment-method-text = To start charging please add a payment method.

# ChargingDetails
charging-timer-placeholder = --:--
charge-time = Charge time
charging-stop-info = You can always finish charging by disconnecting your car
stop-charge = Stop Charge
confirm-stop-charging = Are you sure you want to stop charging?
stop-charging-warning = This will end your charging session permanently.
button-no = No
button-stop-charging = Stop charging


# ChargingSteps
charging-start = Start Charging
charging-continue = Continue
charging-cancel-confirm = Are you sure you want to cancel?
charging-cancel-warning = This will end your charging session permanently.
button-no = No
button-yes-cancel = Yes, Cancel

#Drawer
terms-and-condition = Terms and Conditions
powered-by = Powered by
live-support = Live support
payment-method = Payment Method
charging-history = Charging history
welcome-message = Welcome

# Session statuses
session-status-ACTIVE = Active
session-status-COMPLETED = Completed
session-status-INVALID = Invalid
session-status-PENDING = Pending
# Add other statuses as needed

# Command card texts
energy-used = Energy used
kwh = kWh
started = Started

# Date and time format
date-time-format = HH:mm, DD/MM/YYYY

#command sheet
charging-details = Charging details
final-cost = Final cost
view = View
invoice = Invoice
charging-page = Charging page

# CommandsList
map = Map
charging-history = Charging History
nothing-to-see = Nothing to see here
no-charges-yet = You haven't charged with us yet, select your location to start your first charge.
view-locations = View locations
no-charges-alt = Something is wrong

# ConnectorCard
# Connector statuses
connector-status-available = Available
connector-status-charging = Charging
connector-status-broken = Out of Order
connector-status-blocked = Blocked
connector-status-difficult = Difficult to use
connector-status-issue = Possible issue

# Connector information
connector-power-up-to = up to
connector-power-unit = kW

# Other connector-related translations
connector-price-per-kwh = {$price}/kWh
connector-format = Connector format: {$format}

# ConnectorCard
connector-status-available = Available
connector-status-charging = Charging
connector-status-broken = Out of Order
connector-status-blocked = Blocked
connector-status-difficult = Difficult to use
connector-status-issue = Possible issue
connector-power-up-to = up to
connector-power-unit = kW

# ConnectorDetails
connector-details-title = Confirmation
connector-details-back = Location
connector-details-price = Price
connector-details-speed = Speed
connector-details-up-to = Up to 
connector-details-charger-id = Charger ID is {$id}. 
connector-details-report-issue = Something wrong? Report issue

# ConnectorsSheet
connectors-sheet-charger = Charger {$number}

# LocationDetails
location-details-title = Location
location-details-back-text = Map
location-details-search-placeholder = Search device code
location-details-clear-search = Clear
location-details-no-results-alt = No results found
location-details-no-results-title = No Results Found
location-details-no-results-description = We're sorry, but we couldn't find any matches for your search.

# LocationCard
location-card-unavailable = Unavailable
location-card-available-connectors = {$available}/{$total}
location-card-up-to = Up to
location-card-power = {$power} kW
location-card-from = From

# LocationsList
locations-list-no-results-alt = No results found
locations-list-no-results-title = No Locations Found
locations-list-no-results-description = We couldn't find any charging locations matching your criteria. Try adjusting your filters or search area.

# LocationsSheet
locations-sheet-all = All
locations-sheet-recent = Recent
locations-sheet-nothing-to-see = Nothing to see here
locations-sheet-no-recent-locations = You haven't checked out any locations. Browse from all locations to find the ones you like.


# PaymentMethodList 
payment-method-list-title = Payment Method
payment-method-list-back-text = Map
payment-method-list-card-number = •••• •••• •••• { $last4 }
payment-method-list-no-card = No card added
payment-method-list-edit = Edit
payment-method-list-add-card = Add card

# PaymentMethodSheet 
payment-method-sheet-title = Add your payment method
payment-method-sheet-card-info = Card information
payment-method-sheet-billing-address = Billing Address
payment-method-sheet-save-payment = Save payment
payment-method-sheet-validation-warning = Only { $fleetName }-issued cards are accepted. For further details, Learn more
payment-method-sheet-card-declined = Your card has been declined. Make sure you are adding { $fleetName } card


# Rating Sheet 
rating-thank-you-alt = Thank you
rating-thank-you-title = Thank you for charging!
rating-feedback-message = We would love to hear about your experience with this charger so that we can improve it in the future.
rating-star-label = Rate { $number } out of 5 stars

# Report Sheet Translations
report-sheet-title = Report
report-issue-type-label = Select issue type
report-issue-placeholder = Please select your issue
report-submit-button = Submit
report-issue-required = Issue type is required

# Report Issue Types
report-issue-broken = Charger is broken
report-issue-start = Couldn't start charging session
report-issue-interrupted = Charging session interrupted
report-issue-directions = I can't find the charger
report-issue-connector = Wrong connector type
report-issue-blocked = Charger is blocked