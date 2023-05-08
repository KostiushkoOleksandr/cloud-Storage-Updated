import React from 'react';

const Strengths = () => {
    return (
        <div>
            <div className='gallery'>
                <div>
                    <h3 className='slide-text-gallery'>
                        Основні переваги використання <br/> власного хмарного сервісу над іншими.
                    </h3>
                </div>

                <div className='container'>
                    <div className='hero-benefits-cards'>
                        <div className='benefits-cards-inner'>
                            <div className='benefits-card' >
                                <img width="164" height="164" src="https://surfshark.com/wp-content/themes/surfshark/assets/img/home/browse-privately.png" alt="free"/>
                                <h2>
                                    Високий рівень безпеки
                                </h2>
                                <p>
                                    Ви можете забезпечити високий рівень безпеки для своїх даних. На відміну від інших хмарних сервісів, ви можете контролювати захист інформації від несанкціонованого доступу.
                                </p>
                            </div>
                            <div className='benefits-card' >
                                <img width="164" height="164" src="https://surfshark.com/wp-content/themes/surfshark/assets/img/home/browse-privately.png" alt=""/>
                                <h2>
                                    Можливість забезпечити індивідуальні потреби
                                </h2>
                                <p>
                                    Якщо ви створюєте свій власний хмарний сервіс, ви можете забезпечити індивідуальні потреби в зберіганні і обробці даних. Ви можете створити унікальну інфраструктуру, що відповідає саме вашим потребам.
                                </p>
                            </div>
                            <div className='benefits-card' >
                                <img width="164" height="164" src="https://surfshark.com/wp-content/themes/surfshark/assets/img/home/browse-privately.png" alt=""/>
                                <h2>
                                    Повний контроль над даними
                                </h2>
                                <p>
                                    Ви повністю контролюєте свої дані і не залежите від інших хмарних сервісів. Ви можете встановлювати свої власні правила збереження даних, забезпечувати їх захист і забезпечувати безпеку доступу до них.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Strengths;