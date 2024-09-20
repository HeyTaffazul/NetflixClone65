const ids = [
    "sign-in-text", 
    "email-label",
    "email-inputError",
    "pwd-label",
    "pwd-inputError",
    "remember-me-label",
    "help",
    "fb-btn-text",
    "sign-up",
    "sign-up-link",
    "reCAPInfo",
    "learn-more",
    "reCAP1",
    "reCAP2",
    "reCAP3",
    "reCAP4",
    "reCAP5",
    "footer-header",
    "gift",
    "terms",
    "privacy"
]

const labels = Object.freeze (
    {
        'en': [
            "Sign In",
            "Email or phone number",
            "Please enter a valid email or phone number.",
            "Password",
            "Your password must contain between 4 and 60 characters.",
            "Remember me",
            "Need help?",
            "Login with Facebook",
            "New to Netflix? ",
            "Sign up now.",
            "This page is protected by Google reCAPTCHA to ensure you're not a bot. ",
            "Learn more",
            "The information collected by Google reCAPTCHA is subject to the Google ",
            "Privacy Policy",
            " and ",
            "Terms of Service",
            ", and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).",
            "Questions? Call ",
            "Gift Card Terms",
            "Terms of Use",
            "Privacy Statement",
        ],
        'pt': [
            "साइन इन करें",
            "ईमेल या फ़ोन नंब",
            "कृपया एक वैध ईमेल या फ़ोन नंबर दर्ज करें",
            "पासवर्ड",
            "आपके पासवर्ड में 4 से 60 अक्षर के बीच होना चाहिए।",
            "याद रखें",
            "आपको मदद चाहिए?",
            "फ़ेसबुक लॉगिन करें",
            "Netflix पर नए हैं ",
            "अभी साइन अप करें|",
            "यह पक्का करने के लिए कि आप बॉट नहीं हैं, यह पेज Google reCAPTCHA द्वारा सुरक्षित है.",
            "और जानें",
            "Google reCAPTCHA द्वारा एकत्रित की गई जानकारी Google के अधीन है",
            "Política de Privacidade",
            " e ",
            "सेवा की शर्तें",
            ", e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).",
            "कोई सवाल है? ",
            "उपहार कार्ड की शर्तें",
            "उपयोग की शर्तें",
            "गोपनीयता वाले कथन",
        ],
    }
);

const loadTexts = function (lang) {
    let text = lang === 'pt' ? labels.pt : labels.en;
    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).innerHTML = text[i];
    }
    document.getElementById('login-button').value = text[0];
    document.lang = lang;
}

const getSelectedLanguage = function () {
    let selector = document.getElementById("language-selector");
    let value = selector.options[selector.selectedIndex].value;
    return value;
}

const getBrowserLanguage = function () {
    let lang = navigator.language || navigator.userLanguage;
    lang = lang.slice(0, 2);
    return lang;
}

const setSelectedLanguage = function (lang) {
    lang = lang === 'pt' ? lang : 'en';
    document.getElementById('language-selector').value = lang;
}

const setUpLanguage = function () {
    let lang = getBrowserLanguage();
    lang = lang.slice(0, 2);
    loadTexts(lang);
    setSelectedLanguage(lang);
}