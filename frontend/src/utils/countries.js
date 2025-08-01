const countries = [
    { dialCode: "+91", flag: "🇮🇳", alpha2: "IN", name: "India" },
    { dialCode: "+7", flag: "🇷🇺", alpha2: "RU", name: "Russia" },
    { dialCode: "+7", flag: "🇰🇿", alpha2: "KZ", name: "Kazakhstan" },
    { dialCode: "+81", flag: "🇯🇵", alpha2: "JP", name: "Japan" },
    { dialCode: "+82", flag: "🇰🇷", alpha2: "KR", name: "South Korea" },
    { dialCode: "+84", flag: "🇻🇳", alpha2: "VN", name: "Vietnam" },
    { dialCode: "+850", flag: "🇰🇵", alpha2: "KP", name: "North Korea" },
    { dialCode: "+852", flag: "🇭🇰", alpha2: "HK", name: "Hong Kong" },
    { dialCode: "+853", flag: "🇲🇴", alpha2: "MO", name: "Macau" },
    { dialCode: "+855", flag: "🇰🇭", alpha2: "KH", name: "Cambodia" },
    { dialCode: "+856", flag: "🇱🇦", alpha2: "LA", name: "Laos" },
    { dialCode: "+86", flag: "🇨🇳", alpha2: "CN", name: "China" },
    { dialCode: "+880", flag: "🇧🇩", alpha2: "BD", name: "Bangladesh" },
    { dialCode: "+886", flag: "🇹🇼", alpha2: "TW", name: "Taiwan" },
    { dialCode: "+90", flag: "🇹🇷", alpha2: "TR", name: "Turkey" },
    { dialCode: "+92", flag: "🇵🇰", alpha2: "PK", name: "Pakistan" },
    { dialCode: "+93", flag: "🇦🇫", alpha2: "AF", name: "Afghanistan" },
    { dialCode: "+94", flag: "🇱🇰", alpha2: "LK", name: "Sri Lanka" },
    { dialCode: "+95", flag: "🇲🇲", alpha2: "MM", name: "Myanmar" },
    { dialCode: "+960", flag: "🇲🇻", alpha2: "MV", name: "Maldives" },
    { dialCode: "+1", flag: "🇨🇦", alpha2: "CA", name: "Canada" },
    { dialCode: "+1", flag: "🇺🇸", alpha2: "US", name: "United States" },
    { dialCode: "+1242", flag: "🇧🇸", alpha2: "BS", name: "Bahamas" },
    { dialCode: "+1246", flag: "🇧🇧", alpha2: "BB", name: "Barbados" },
    { dialCode: "+1264", flag: "🇦🇮", alpha2: "AI", name: "Anguilla" },
    { dialCode: "+1268", flag: "🇦🇬", alpha2: "AG", name: "Antigua and Barbuda" },
    { dialCode: "+1284", flag: "🇻🇬", alpha2: "VG", name: "Virgin Islands, British" },
    { dialCode: "+1340", flag: "🇻🇮", alpha2: "VI", name: "Virgin Islands, U.S." },
    { dialCode: "+1441", flag: "🇧🇲", alpha2: "BM", name: "Bermuda" },
    { dialCode: "+1473", flag: "🇬🇩", alpha2: "GD", name: "Grenada" },
    { dialCode: "+1649", flag: "🇹🇨", alpha2: "TC", name: "Turks and Caicos Islands" },
    { dialCode: "+1664", flag: "🇲🇸", alpha2: "MS", name: "Montserrat" },
    { dialCode: "+1670", flag: "🇲🇵", alpha2: "MP", name: "Northern Mariana Islands" },
    { dialCode: "+1671", flag: "🇬🇺", alpha2: "GU", name: "Guam" },
    { dialCode: "+1684", flag: "🇦🇸", alpha2: "AS", name: "American Samoa" },
    { dialCode: "+1758", flag: "🇱🇨", alpha2: "LC", name: "Saint Lucia" },
    { dialCode: "+1767", flag: "🇩🇲", alpha2: "DM", name: "Dominica" },
    { dialCode: "+1784", flag: "🇻🇨", alpha2: "VC", name: "Saint Vincent and the Grenadines" },
    { dialCode: "+1849", flag: "🇩🇴", alpha2: "DO", name: "Dominican Republic" },
    { dialCode: "+1868", flag: "🇹🇹", alpha2: "TT", name: "Trinidad and Tobago" },
    { dialCode: "+1869", flag: "🇰🇳", alpha2: "KN", name: "Saint Kitts and Nevis" },
    { dialCode: "+1876", flag: "🇯🇲", alpha2: "JM", name: "Jamaica" },
    { dialCode: "+1939", flag: "🇵🇷", alpha2: "PR", name: "Puerto Rico" },
    { dialCode: "+20", flag: "🇪🇬", alpha2: "EG", name: "Egypt" },
    { dialCode: "+211", flag: "🇸🇸", alpha2: "SS", name: "South Sudan" },
    { dialCode: "+212", flag: "🇲🇦", alpha2: "MA", name: "Morocco" },
    { dialCode: "+213", flag: "🇩🇿", alpha2: "DZ", name: "Algeria" },
    { dialCode: "+216", flag: "🇹🇳", alpha2: "TN", name: "Tunisia" },
    { dialCode: "+218", flag: "🇱🇾", alpha2: "LY", name: "Libyan Arab Jamahiriya" },
    { dialCode: "+220", flag: "🇬🇲", alpha2: "GM", name: "Gambia" },
    { dialCode: "+221", flag: "🇸🇳", alpha2: "SN", name: "Senegal" },
    { dialCode: "+222", flag: "🇲🇷", alpha2: "MR", name: "Mauritania" },
    { dialCode: "+223", flag: "🇲🇱", alpha2: "ML", name: "Mali" },
    { dialCode: "+224", flag: "🇬🇳", alpha2: "GN", name: "Guinea" },
    { dialCode: "+225", flag: "🇨🇮", alpha2: "CI", name: "Cote d'Ivoire" },
    { dialCode: "+226", flag: "🇧🇫", alpha2: "BF", name: "Burkina Faso" },
    { dialCode: "+227", flag: "🇳🇪", alpha2: "NE", name: "Niger" },
    { dialCode: "+228", flag: "🇹🇬", alpha2: "TG", name: "Togo" },
    { dialCode: "+229", flag: "🇧🇯", alpha2: "BJ", name: "Benin" },
    { dialCode: "+230", flag: "🇲🇺", alpha2: "MU", name: "Mauritius" },
    { dialCode: "+231", flag: "🇱🇷", alpha2: "LR", name: "Liberia" },
    { dialCode: "+232", flag: "🇸🇱", alpha2: "SL", name: "Sierra Leone" },
    { dialCode: "+233", flag: "🇬🇭", alpha2: "GH", name: "Ghana" },
    { dialCode: "+234", flag: "🇳🇬", alpha2: "NG", name: "Nigeria" },
    { dialCode: "+235", flag: "🇹🇩", alpha2: "TD", name: "Chad" },
    { dialCode: "+236", flag: "🇨🇫", alpha2: "CF", name: "Central African Republic" },
    { dialCode: "+237", flag: "🇨🇲", alpha2: "CM", name: "Cameroon" },
    { dialCode: "+238", flag: "🇨🇻", alpha2: "CV", name: "Cape Verde" },
    { dialCode: "+239", flag: "🇸🇹", alpha2: "ST", name: "Sao Tome and Principe" },
    { dialCode: "+240", flag: "🇬🇶", alpha2: "GQ", name: "Equatorial Guinea" },
    { dialCode: "+241", flag: "🇬🇦", alpha2: "GA", name: "Gabon" },
    { dialCode: "+242", flag: "🇨🇬", alpha2: "CG", name: "Congo" },
    { dialCode: "+243", flag: "🇨🇩", alpha2: "CD", name: "Congo, The Democratic Republic of Congo" },
    { dialCode: "+244", flag: "🇦🇴", alpha2: "AO", name: "Angola" },
    { dialCode: "+245", flag: "🇬🇼", alpha2: "GW", name: "Guinea-Bissau" },
    { dialCode: "+246", flag: "🇮🇴", alpha2: "IO", name: "British Indian Ocean Territory" },
    { dialCode: "+248", flag: "🇸🇨", alpha2: "SC", name: "Seychelles" },
    { dialCode: "+249", flag: "🇸🇩", alpha2: "SD", name: "Sudan" },
    { dialCode: "+250", flag: "🇷🇼", alpha2: "RW", name: "Rwanda" },
    { dialCode: "+251", flag: "🇪🇹", alpha2: "ET", name: "Ethiopia" },
    { dialCode: "+252", flag: "🇸🇴", alpha2: "SO", name: "Somalia" },
    { dialCode: "+253", flag: "🇩🇯", alpha2: "DJ", name: "Djibouti" },
    { dialCode: "+254", flag: "🇰🇪", alpha2: "KE", name: "Kenya" },
    { dialCode: "+255", flag: "🇹🇿", alpha2: "TZ", name: "Tanzania, United Republic of Tanzania" },
    { dialCode: "+256", flag: "🇺🇬", alpha2: "UG", name: "Uganda" },
    { dialCode: "+257", flag: "🇧🇮", alpha2: "BI", name: "Burundi" },
    { dialCode: "+258", flag: "🇲🇿", alpha2: "MZ", name: "Mozambique" },
    { dialCode: "+260", flag: "🇿🇲", alpha2: "ZM", name: "Zambia" },
    { dialCode: "+261", flag: "🇲🇬", alpha2: "MG", name: "Madagascar" },
    { dialCode: "+262", flag: "🇾🇹", alpha2: "YT", name: "Mayotte" },
    { dialCode: "+262", flag: "🇷🇪", alpha2: "RE", name: "Reunion" },
    { dialCode: "+263", flag: "🇿🇼", alpha2: "ZW", name: "Zimbabwe" },
    { dialCode: "+264", flag: "🇳🇦", alpha2: "NA", name: "Namibia" },
    { dialCode: "+265", flag: "🇲🇼", alpha2: "MW", name: "Malawi" },
    { dialCode: "+266", flag: "🇱🇸", alpha2: "LS", name: "Lesotho" },
    { dialCode: "+267", flag: "🇧🇼", alpha2: "BW", name: "Botswana" },
    { dialCode: "+268", flag: "🇸🇿", alpha2: "SZ", name: "Swaziland" },
    { dialCode: "+269", flag: "🇰🇲", alpha2: "KM", name: "Comoros" },
    { dialCode: "+27", flag: "🇿🇦", alpha2: "ZA", name: "South Africa" },
    { dialCode: "+290", flag: "🇸🇭", alpha2: "SH", name: "Saint Helena" },
    { dialCode: "+291", flag: "🇪🇷", alpha2: "ER", name: "Eritrea" },
    { dialCode: "+297", flag: "🇦🇼", alpha2: "AW", name: "Aruba" },
    { dialCode: "+298", flag: "🇫🇴", alpha2: "FO", name: "Faroe Islands" },
    { dialCode: "+299", flag: "🇬🇱", alpha2: "GL", name: "Greenland" },
    { dialCode: "+30", flag: "🇬🇷", alpha2: "GR", name: "Greece" },
    { dialCode: "+31", flag: "🇳🇱", alpha2: "NL", name: "Netherlands" },
    { dialCode: "+32", flag: "🇧🇪", alpha2: "BE", name: "Belgium" },
    { dialCode: "+33", flag: "🇫🇷", alpha2: "FR", name: "France" },
    { dialCode: "+34", flag: "🇪🇸", alpha2: "ES", name: "Spain" },
    { dialCode: "+350", flag: "🇬🇮", alpha2: "GI", name: "Gibraltar" },
    { dialCode: "+351", flag: "🇵🇹", alpha2: "PT", name: "Portugal" },
    { dialCode: "+352", flag: "🇱🇺", alpha2: "LU", name: "Luxembourg" },
    { dialCode: "+353", flag: "🇮🇪", alpha2: "IE", name: "Ireland" },
    { dialCode: "+354", flag: "🇮🇸", alpha2: "IS", name: "Iceland" },
    { dialCode: "+355", flag: "🇦🇱", alpha2: "AL", name: "Albania" },
    { dialCode: "+356", flag: "🇲🇹", alpha2: "MT", name: "Malta" },
    { dialCode: "+357", flag: "🇨🇾", alpha2: "CY", name: "Cyprus" },
    { dialCode: "+358", flag: "🇫🇮", alpha2: "FI", name: "Finland" },
    { dialCode: "+359", flag: "🇧🇬", alpha2: "BG", name: "Bulgaria" },
    { dialCode: "+36", flag: "🇭🇺", alpha2: "HU", name: "Hungary" },
    { dialCode: "+370", flag: "🇱🇹", alpha2: "LT", name: "Lithuania" },
    { dialCode: "+371", flag: "🇱🇻", alpha2: "LV", name: "Latvia" },
    { dialCode: "+372", flag: "🇪🇪", alpha2: "EE", name: "Estonia" },
    { dialCode: "+373", flag: "🇲🇩", alpha2: "MD", name: "Moldova, Republic of Moldova" },
    { dialCode: "+374", flag: "🇦🇲", alpha2: "AM", name: "Armenia" },
    { dialCode: "+375", flag: "🇧🇾", alpha2: "BY", name: "Belarus" },
    { dialCode: "+376", flag: "🇦🇩", alpha2: "AD", name: "Andorra" },
    { dialCode: "+377", flag: "🇲🇨", alpha2: "MC", name: "Monaco" },
    { dialCode: "+378", flag: "🇸🇲", alpha2: "SM", name: "San Marino" },
    { dialCode: "+380", flag: "🇺🇦", alpha2: "UA", name: "Ukraine" },
    { dialCode: "+381", flag: "🇷🇸", alpha2: "RS", name: "Serbia" },
    { dialCode: "+382", flag: "🇲🇪", alpha2: "ME", name: "Montenegro" },
    { dialCode: "+383", flag: "🇽🇰", alpha2: "XK", name: "Kosovo" },
    { dialCode: "+385", flag: "🇭🇷", alpha2: "HR", name: "Croatia" },
    { dialCode: "+386", flag: "🇸🇮", alpha2: "SI", name: "Slovenia" },
    { dialCode: "+387", flag: "🇧🇦", alpha2: "BA", name: "Bosnia and Herzegovina" },
    { dialCode: "+389", flag: "🇲🇰", alpha2: "MK", name: "North Macedonia" },
    { dialCode: "+39", flag: "🇮🇹", alpha2: "IT", name: "Italy" },
    { dialCode: "+40", flag: "🇷🇴", alpha2: "RO", name: "Romania" },
    { dialCode: "+41", flag: "🇨🇭", alpha2: "CH", name: "Switzerland" },
    { dialCode: "+420", flag: "🇨🇿", alpha2: "CZ", name: "Czech Republic" },
    { dialCode: "+421", flag: "🇸🇰", alpha2: "SK", name: "Slovakia" },
    { dialCode: "+423", flag: "🇱🇮", alpha2: "LI", name: "Liechtenstein" },
    { dialCode: "+43", flag: "🇦🇹", alpha2: "AT", name: "Austria" },
    { dialCode: "+44", flag: "🇬🇧", alpha2: "GB", name: "United Kingdom" },
    { dialCode: "+45", flag: "🇩🇰", alpha2: "DK", name: "Denmark" },
    { dialCode: "+46", flag: "🇸🇪", alpha2: "SE", name: "Sweden" },
    { dialCode: "+47", flag: "🇳🇴", alpha2: "NO", name: "Norway" },
    { dialCode: "+48", flag: "🇵🇱", alpha2: "PL", name: "Poland" },
    { dialCode: "+49", flag: "🇩🇪", alpha2: "DE", name: "Germany" },
    { dialCode: "+500", flag: "🇫🇰", alpha2: "FK", name: "Falkland Islands" },
    { dialCode: "+501", flag: "🇧🇿", alpha2: "BZ", name: "Belize" },
    { dialCode: "+502", flag: "🇬🇹", alpha2: "GT", name: "Guatemala" },
    { dialCode: "+503", flag: "🇸🇻", alpha2: "SV", name: "El Salvador" },
    { dialCode: "+504", flag: "🇭🇳", alpha2: "HN", name: "Honduras" },
    { dialCode: "+505", flag: "🇳🇮", alpha2: "NI", name: "Nicaragua" },
    { dialCode: "+506", flag: "🇨🇷", alpha2: "CR", name: "Costa Rica" },
    { dialCode: "+507", flag: "🇵🇦", alpha2: "PA", name: "Panama" },
    { dialCode: "+508", flag: "🇵🇲", alpha2: "PM", name: "Saint Pierre and Miquelon" },
    { dialCode: "+509", flag: "🇭🇹", alpha2: "HT", name: "Haiti" },
    { dialCode: "+51", flag: "🇵🇪", alpha2: "PE", name: "Peru" },
    { dialCode: "+52", flag: "🇲🇽", alpha2: "MX", name: "Mexico" },
    { dialCode: "+53", flag: "🇨🇺", alpha2: "CU", name: "Cuba" },
    { dialCode: "+54", flag: "🇦🇷", alpha2: "AR", name: "Argentina" },
    { dialCode: "+55", flag: "🇧🇷", alpha2: "BR", name: "Brazil" },
    { dialCode: "+56", flag: "🇨🇱", alpha2: "CL", name: "Chile" },
    { dialCode: "+57", flag: "🇨🇴", alpha2: "CO", name: "Colombia" },
    { dialCode: "+58", flag: "🇻🇪", alpha2: "VE", name: "Venezuela, Bolivarian Republic of Venezuela" },
    { dialCode: "+590", flag: "🇬🇵", alpha2: "GP", name: "Guadeloupe" },
    { dialCode: "+591", flag: "🇧🇴", alpha2: "BO", name: "Bolivia" },
    { dialCode: "+592", flag: "🇬🇾", alpha2: "GY", name: "Guyana" },
    { dialCode: "+593", flag: "🇪🇨", alpha2: "EC", name: "Ecuador" },
    { dialCode: "+594", flag: "🇬🇫", alpha2: "GF", name: "French Guiana" },
    { dialCode: "+595", flag: "🇵🇾", alpha2: "PY", name: "Paraguay" },
    { dialCode: "+596", flag: "🇲🇶", alpha2: "MQ", name: "Martinique" },
    { dialCode: "+597", flag: "🇸🇷", alpha2: "SR", name: "Suriname" },
    { dialCode: "+598", flag: "🇺🇾", alpha2: "UY", name: "Uruguay" },
    { dialCode: "+599", flag: "🇧🇶", alpha2: "BQ", name: "Bonaire, Sint Eustatius and Saba" },
    { dialCode: "+60", flag: "🇲🇾", alpha2: "MY", name: "Malaysia" },
    { dialCode: "+61", flag: "🇦🇺", alpha2: "AU", name: "Australia" },
    { dialCode: "+62", flag: "🇮🇩", alpha2: "ID", name: "Indonesia" },
    { dialCode: "+63", flag: "🇵🇭", alpha2: "PH", name: "Philippines" },
    { dialCode: "+64", flag: "🇳🇿", alpha2: "NZ", name: "New Zealand" },
    { dialCode: "+65", flag: "🇸🇬", alpha2: "SG", name: "Singapore" },
    { dialCode: "+66", flag: "🇹🇭", alpha2: "TH", name: "Thailand" },
    { dialCode: "+670", flag: "🇹🇱", alpha2: "TL", name: "Timor-Leste" },
    { dialCode: "+672", flag: "🇳🇫", alpha2: "NF", name: "Norfolk Island" },
    { dialCode: "+673", flag: "🇧🇳", alpha2: "BN", name: "Brunei Darussalam" },
    { dialCode: "+674", flag: "🇳🇷", alpha2: "NR", name: "Nauru" },
    { dialCode: "+675", flag: "🇵🇬", alpha2: "PG", name: "Papua New Guinea" },
    { dialCode: "+676", flag: "🇹🇴", alpha2: "TO", name: "Tonga" },
    { dialCode: "+677", flag: "🇸🇧", alpha2: "SB", name: "Solomon Islands" },
    { dialCode: "+678", flag: "🇻🇺", alpha2: "VU", name: "Vanuatu" },
    { dialCode: "+679", flag: "🇫🇯", alpha2: "FJ", name: "Fiji" },
    { dialCode: "+680", flag: "🇵🇼", alpha2: "PW", name: "Palau" },
    { dialCode: "+681", flag: "🇼🇫", alpha2: "WF", name: "Wallis and Futuna" },
    { dialCode: "+682", flag: "🇨🇰", alpha2: "CK", name: "Cook Islands" },
    { dialCode: "+683", flag: "🇳🇺", alpha2: "NU", name: "Niue" },
    { dialCode: "+685", flag: "🇼🇸", alpha2: "WS", name: "Samoa" },
    { dialCode: "+686", flag: "🇰🇮", alpha2: "KI", name: "Kiribati" },
    { dialCode: "+687", flag: "🇳🇨", alpha2: "NC", name: "New Caledonia" },
    { dialCode: "+688", flag: "🇹🇻", alpha2: "TV", name: "Tuvalu" },
    { dialCode: "+689", flag: "🇵🇫", alpha2: "PF", name: "French Polynesia" },
    { dialCode: "+690", flag: "🇹🇰", alpha2: "TK", name: "Tokelau" },
    { dialCode: "+691", flag: "🇫🇲", alpha2: "FM", name: "Micronesia, Federated States of Micronesia" },
    { dialCode: "+692", flag: "🇲🇭", alpha2: "MH", name: "Marshall Islands" }
]  


  export default countries;