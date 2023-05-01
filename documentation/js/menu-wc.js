'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tasks documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-751d9532574f14a1375b95e122eae9ec6757f7bca525060cf71d60fc45575c7599ac306666db8372ae0556c41c5b8c1b27eb7a24505d17e912ded3eef4b30b09"' : 'data-target="#xs-components-links-module-AdminModule-751d9532574f14a1375b95e122eae9ec6757f7bca525060cf71d60fc45575c7599ac306666db8372ae0556c41c5b8c1b27eb7a24505d17e912ded3eef4b30b09"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-751d9532574f14a1375b95e122eae9ec6757f7bca525060cf71d60fc45575c7599ac306666db8372ae0556c41c5b8c1b27eb7a24505d17e912ded3eef4b30b09"' :
                                            'id="xs-components-links-module-AdminModule-751d9532574f14a1375b95e122eae9ec6757f7bca525060cf71d60fc45575c7599ac306666db8372ae0556c41c5b8c1b27eb7a24505d17e912ded3eef4b30b09"' }>
                                            <li class="link">
                                                <a href="components/AheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidemenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidemenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-8c7a496f445f79b184782a12f793ce94515053de067ba03fd10838e020b1bd933309aee0c7db00dad87fd074ef09d98597a84e544cd6d9bafb15de865dcfa613"' : 'data-target="#xs-components-links-module-AppModule-8c7a496f445f79b184782a12f793ce94515053de067ba03fd10838e020b1bd933309aee0c7db00dad87fd074ef09d98597a84e544cd6d9bafb15de865dcfa613"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8c7a496f445f79b184782a12f793ce94515053de067ba03fd10838e020b1bd933309aee0c7db00dad87fd074ef09d98597a84e544cd6d9bafb15de865dcfa613"' :
                                            'id="xs-components-links-module-AppModule-8c7a496f445f79b184782a12f793ce94515053de067ba03fd10838e020b1bd933309aee0c7db00dad87fd074ef09d98597a84e544cd6d9bafb15de865dcfa613"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-a0b43af9a24bcec2bbd264b940f998f2d86880c9819789328094c4f0b1c02542120eeff78d94f2c92ee19066ae4e652022876f6d6f6dc29143f1a399ff63f60d"' : 'data-target="#xs-components-links-module-AuthModule-a0b43af9a24bcec2bbd264b940f998f2d86880c9819789328094c4f0b1c02542120eeff78d94f2c92ee19066ae4e652022876f6d6f6dc29143f1a399ff63f60d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-a0b43af9a24bcec2bbd264b940f998f2d86880c9819789328094c4f0b1c02542120eeff78d94f2c92ee19066ae4e652022876f6d6f6dc29143f1a399ff63f60d"' :
                                            'id="xs-components-links-module-AuthModule-a0b43af9a24bcec2bbd264b940f998f2d86880c9819789328094c4f0b1c02542120eeff78d94f2c92ee19066ae4e652022876f6d6f6dc29143f1a399ff63f60d"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CocktailModule.html" data-type="entity-link" >CocktailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CocktailModule-08b1278b346c1e9026ca6c8d5e4daca2ab1af5132a3f7f78625e921552c31a7a8ce10175091f39110886e9bbd45c7083c8a0352d09b8fa214ae11ec04654e5ad"' : 'data-target="#xs-components-links-module-CocktailModule-08b1278b346c1e9026ca6c8d5e4daca2ab1af5132a3f7f78625e921552c31a7a8ce10175091f39110886e9bbd45c7083c8a0352d09b8fa214ae11ec04654e5ad"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CocktailModule-08b1278b346c1e9026ca6c8d5e4daca2ab1af5132a3f7f78625e921552c31a7a8ce10175091f39110886e9bbd45c7083c8a0352d09b8fa214ae11ec04654e5ad"' :
                                            'id="xs-components-links-module-CocktailModule-08b1278b346c1e9026ca6c8d5e4daca2ab1af5132a3f7f78625e921552c31a7a8ce10175091f39110886e9bbd45c7083c8a0352d09b8fa214ae11ec04654e5ad"' }>
                                            <li class="link">
                                                <a href="components/CAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CocktailRoutingModule.html" data-type="entity-link" >CocktailRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-ecd9d51ae1ff4018ca1e9e31651930aa24663f188ead505a1c352fa55c178d1dfab25bf92c4424faad4d114fa12f24e2ab66de56c92bc22afc4de36697422a16"' : 'data-target="#xs-components-links-module-PublicModule-ecd9d51ae1ff4018ca1e9e31651930aa24663f188ead505a1c352fa55c178d1dfab25bf92c4424faad4d114fa12f24e2ab66de56c92bc22afc4de36697422a16"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-ecd9d51ae1ff4018ca1e9e31651930aa24663f188ead505a1c352fa55c178d1dfab25bf92c4424faad4d114fa12f24e2ab66de56c92bc22afc4de36697422a16"' :
                                            'id="xs-components-links-module-PublicModule-ecd9d51ae1ff4018ca1e9e31651930aa24663f188ead505a1c352fa55c178d1dfab25bf92c4424faad4d114fa12f24e2ab66de56c92bc22afc4de36697422a16"' }>
                                            <li class="link">
                                                <a href="components/CocktailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CocktailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-76da79adafcb7292022c6ce5f2c6419c375dd6e5a4543caf2686217aef4c79a054643c2eadc5b0121dfa74b6884b78575618b2aedad1eed1a54033f6555e9765"' : 'data-target="#xs-components-links-module-UserModule-76da79adafcb7292022c6ce5f2c6419c375dd6e5a4543caf2686217aef4c79a054643c2eadc5b0121dfa74b6884b78575618b2aedad1eed1a54033f6555e9765"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-76da79adafcb7292022c6ce5f2c6419c375dd6e5a4543caf2686217aef4c79a054643c2eadc5b0121dfa74b6884b78575618b2aedad1eed1a54033f6555e9765"' :
                                            'id="xs-components-links-module-UserModule-76da79adafcb7292022c6ce5f2c6419c375dd6e5a4543caf2686217aef4c79a054643c2eadc5b0121dfa74b6884b78575618b2aedad1eed1a54033f6555e9765"' }>
                                            <li class="link">
                                                <a href="components/UAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});