define({
	id: "fi",
	name: "Suomi",
	texts: {
		preferences: {
			thousandSeparator: " ",
			decimalSeparator: "."
		},
		faults: {
			101: "Tiedostoa ei löydy.",
			102: "Lompakkoa ei ole luotu.",
			103: "Lompakkotiedosto on vaurioitunut.Palauta lompakkotiedosto varmuuskopiosta, jonka olet luonut tiliä luodessasi.",
			104: "Syöttämäsi salasana ei ole oikea. Toivottavasti muistat oikean salasanan. Salasanaa ei voi palauttaa, jos se hukkuu!",
			106: "Ennenkuin voit käyttää lompakkoa, se pitää avata. Avataksesi lompakon, on sinulla oltava salasana.",
			107: "Lompakko ei sisältää tätä tiliä.",
			108: "Tiliä ei voida poistaa.Tämä johtuu todenäköisesti siitä, että tilin saldo on enemmän, kuin 0 NEM, tai yrität poistaa ensisijaista tiliä.",
			109: "Saman niminen tili on jo olemassa. Valitse toinen lompakon nimi.",
			110: "Lompakko sisältää jo tämän tilin.",
			202: "Salattua viestiä ei voida lähettää, koska vastaanottaja ei ole tehnyt koskaan tilisiirtoa.",
			305: "NEM Infrastructure Server ei ole käytettävissä.",
			306: "Esiintyi ongelma, jota kehitystiimi ei ole tavannut aikaisemmin. Pahoittelemme tilannnetta, yritä uudelleen. Muussa tapauksessa avaa uusi keskustelu NEM NIS/NCC foorumissa.",
			400: "Jotkut parametrit puuttuvat tai ovat viallisia.",
			401: "Tätä toimintoa ei voida saattaa loppuun, koska muutoin on mahdollista että \"private key\" näkyy ulkopuolisille, mikäli se lähetetään NIS-palveluun.\n",
			404: "Lähdettä ei löydy.",
			500: "Esiintyi ongelma, jota kehitystiimi ei ole tavannut aikaisemmin. Pahoittelemme tilannnetta, yritä uudelleen. Muussa tapauksessa avaa uusi keskustelu NEM NIS/NCC foorumissa.",
			600: "NCC vaatii NIS palvelimen uudelleenkäynnistyksen, jotta siirtoja voidaan suorittaa NEM cloud palvelusta. Käytä NCC menua näynnistääksesi uudelleen Local node.",
			601: "NIS node on jo käynnistetty uudelleen, toinen yritys ei ole mahdollinen.",
			700: "Louhintaa (Harvesting) ei voida aloittaa. Toiminto on mahdollista, kun tilisi saldo on vähintään 1000 NEM.",
			701: "Aikaraja on ylitetty. Aikaraja on oltava yhden päivän sisällä.",
			702: "Valittu aikaraja on liian kaukana tulevaisuudessa. Aikaraja täytyy olla yhden päivän sisällä.",
			703: "Tililläsi ei ole siirrettävää summaa.",
			704: "Teksti on liian pitkä lähetettäväksi siirron mukana. Yritä lyhentää viestiä.",
			705: "Hash-koodi on jo tietokannassa tai siirtoja on vahvistamatta.",
			706: "Siirron allekirjoitusta ei voida varmistaa.",
			707: "Siirron aikamerkintä on liian kaukana menneisyydessä.",
			708: "Siirron aikamerkintä on liian kaukana tulevaisuudessa.",
			709: "Tili on tuntematon. Tilillä on oltava yksi siirto tai vastaanotto, jotta se voidaan tunnistaa verkossa.",
			901: "Tapahtui virhe määritettäessä offline node.",
			1000: "Private key ja public key, eivät vastaa toisiaan.",
			1001: "Public key ja osoite eivät vastaa toisiaan.",
			1002: "Osoite ei kuulu varsinaiseen verkkoon."
		},
		common: {
			success: "Onnistui",
			appStatus: {
				nccUnknown: "NCC tila tuntematon.",
				nccUnavailable: "NCC ei ole käytettävissä.",
				nccStarting: "NCC on käynnistymässä.",
				nisUnknown: "NIS tila on tuntematon",
				nisUnavailable: "NIS ei ole käytetttävissä",
				nisStarting: "NIS on käynnistymässä.",
				notBooted: "NIS on käynnistettävä uudelleen. Avaa lompakkosi ja käynnistä local node uudelleen popup valikosta, jotta\nvoit muuttaa auto-boot asetuksia. ",
				booting: "NIS on käynnistymässä uudelleen...",
				nisInfoNotAvailable: "NIS info ei ole vielä käytettävissä. Yritetään hakua\nNIS infoa...",
				synchronizing: "NIS synkronointi on käynnissä. Block {{1}}, est. {{2}} takana.",
				daysBehind: {
					0: "Vähemmän, kuin yksi päivä.",
					1: "Yksi päivä",
					many: "{{1}} päivää"
				},
				synchronized: "NIS on sykronoitu !"
			}
		},
		modals: {
			error: {
				title: "Hups!",
				caption: "Virhe {{1}}"
			},
			confirmDefault: {
				yes: "Kyllä",
				no: "Ei"
			},
			settings: {
				title: "Asetukset",
				language: {
					label: "Kieli"
				},
				remoteServer: {
					tabTitle: "Etäpalvelin",
					protocol: "Protokolla",
					protocolOptions: {
						http: "HTTP"
					},
					host: "Host",
					port: "Port"
				},
				autoBoot: {
					tabTitle: "Auto-boot",
					name: "Node nimi",
					account: "Tili",
					primaryAccount: "Ensisijainen tili",
					auto: "Auto boot, kun lompakko on avattu"
				},
				save: "Tallenna",
				saveSuccess: "Asetukset on tallennettu onnistuneesti"
			},
			sendNem: {
				title: "Lähetä NEM",
				labelDesc: "Tämä tili on nimetty {{1}}",
				nullLabelDesc: "Tällä tilillä ei ole nimeä",
				amount: "Summa",
				recipient: "Vastaanottajan tili",
				recipientValidation: "Tilin osoite on oltava 40 merkkiä pitkä, ilman\npilkkuja",
				message: "Viesti",
				encrypt: "Salaa viesti",
				fee: "Palkkio",
				feeValidation: "Palkkio ei voi olla vähempää, kuin minimipalkkio.",
				dueBy: "Maksettava",
				useMinimumFee: "Käytä minimipalkkiota",
				hours: "Tunnit",
				password: "Salasana",
				passwordValidation: "Salasanakenttä ei voi olla tyhjä",
				send: "Lähetys",
				cancel: "Peruuta",
				sending: "Lähetetään...",
				successMessage: "Siirto on lähetetty onnistuneesti!",
				txConfirm: {
					title: "Vahvista siirto",
					amount: "Summa",
					to: "Minne",
					fee: "Palkkio",
					dueBy: "Maksettava",
					hours: "Tunnit",
					total: "Kokonaissumma",
					message: "Viesti",
					encrypted: "Viesti on salattu",
					noMessage: "Ei viestiä",
					cancel: "Peruuta",
					confirm: "Vahvista",
					sending: "Lähetetään..."
				},
				notBootedWarning: {
					title: "Node ei ole käynnistetty uudelleen!",
					message: "Local node on käynnistettävä uudelleen, jotta NEM\nvoidaan lähettää!"
				},
				bootingWarning: {
					title: "Node on käynnistymässä uudelleen",
					message: "Odota, että uudelleenkäynnistys on valmis, ennenkuin teet siirtoja."
				}
			},
			clientInfo: {
				title: "Client info",
				ncc: "NEM Community Client - NCC",
				signer: "Allekirjoittaja",
				remoteServer: "Etäpalvelin",
				local: "Local",
				nis: "NEM Infrastructure Server - NIS",
				sync: "Synkronoitu",
				notSync: "Ei sykronoitu",
				notConnected: "Ei yhteydessä NEM Cloud palveluun.",
				loading: "Ladataan..."
			},
			transactionDetails: {
				title: "Siirron tiedot",
				id: "ID",
				hash: "Hash",
				type: "Siiron tyyppi",
				pending: "Odotetaan",
				outgoing: "Lähtevä",
				incoming: "Saapuva",
				self: "Itse",
				sender: "Lähettäjä",
				recipient: "Vastaanottaja",
				message: "Viesti",
				noMessage: "Ei viestiä",
				encrypted: "Viesti on salattu",
				time: "Aikamerkintä",
				confirmations: "Vahvistuksia",
				confirmationsUnknown: "Tuntemaon",
				amount: "Summa",
				fee: "Palkkio"
			},
			bootLocalNode: {
				title: "Käynnistä local node uudelleen",
				account: "Tili, jolta local node käynnistetään uudelleen",
				noLabel: "<span class=\"null\">&lt;No label&gt;</span>",
				wallet: "Lompakko",
				node: "Node nimi",
				boot: "Käynnistä uudelleen",
				booting: "Käynnistymässä uudelleen..."
			},
			closeWallet: {
				title: "Sulje lompakko",
				message: "Oletko varma, että haluat sulkea lompakon ja palata\naloitussivulle?"
			},
			createAccount: {
				title: "Luo uusi lompakko",
				label: "Yksityinen merkintä",
				wallet: "Lompakko",
				password: "Lompakon salasana",
				successMessage: "Tili {{1}} {{#2}}({{2}}){{/2}} on luotu!",
				create: "Luo"
			},
			createRealAccountData: {
				title: "Luo real account data",
				message: "Alla olevat tiedot ovat oikean lompakkosi tiedot, kun\nNEM on julkaistu. Tallenna osoite, public key ja tärkeimpänä private key, turvalliseen paikkaan. Jos private key hukkuu hävität samalla kaikki NEM kolikkosi!",
				address: "Osoite",
				publicKey: "Public key",
				privateKey: "Private key",
				confirm: {
					title: "Tallenna private key",
					message: "Oletko varma, että private key on tallennettu turvalliseen paikkaan?"
				},
				recheck: {
					title: "Tarkista tallennetu private key uudellen",
					message: "Syötä juuri luomasi private key uudelleen tarkistaaksesi, että sinulla on oikea private key.\nJos sinulla ei ole sitä, niin haluat ehkä luoda uuden.",
					correct: {
						title: "Hienoa!",
						message: "Näyttäisi siltä, että oikea private key on tallennettu. Mista säilyttää se aina varmassa ja turvallisessa paikassa."
					},
					incorrect: {
						title: "Hmm...",
						message: "Syöttämäsi private key ei ole oikea! Haluatko syöttää sen uudelleen, vai palata tilisi alkuperäisiin tilitietoihin?",
						tryAgain: "Yritä syöttää uudelleen",
						seeOriginal: "Katso alkuperäiset tiedot"
					},
					recheck: "Tarkista"
				},
				ok: "OK"
			},
			verifyRealAccountData: {
				title: "Varmista real account data",
				message: "Syötä tallennettu osoitteesi, public key ja private key\nuudelleen, jotta voita tarkistaa niiden yhteensopivuuden.",
				address: "Osoite",
				publicKey: "Public key",
				privateKey: "Private key",
				dataMatched: "Kaikki näyttää hyvältä, syöttämäsi osoite, public key ja private key sopivat yhteen.",
				verify: "Varmista"
			},
			addAccount: {
				title: "Lisää olemassaoleva tili",
				privateKey: "Tilin Private Key",
				wallet: "Lompakko",
				password: "Lompakon salasana",
				successMessage: "Tili {{1}} {{#2}}({{2}}){{/2}} on lisätty lompakkoon!",
				add: "Lisää",
				label: "Merkki"
			},
			setPrimary: {
				title: "Aseta ensisijainen tili",
				account: "Tili on asetettu ensisijaiseksi",
				noLabel: "<span class=\"null\">&lt;No label&gt;</span>",
				wallet: "Lompakko",
				password: "Lompakon salasana",
				successMessage: "Tili {{1}} {{#2}}({{2}}){{/2}} on asetettu ensisijaiseksi!",
				set: "Aseta ensisijaiseksi"
			},
			changeWalletName: {
				title: "Vaihda lompakon nimi",
				wallet: "Nykyisen lompakon nimi",
				newName: "Uusi lompakon mini",
				password: "Lompakon salasana",
				successMessage: "Lompakon nimi on vaihdetttu onnistuneesti<em>{{1}}</em> - <em>{{2}}</em>",
				change: "Vaihda"
			},
			changeWalletPassword: {
				title: "Vaihda lompakon salasana",
				wallet: "Lompakko",
				password: "Nykyinen salasana",
				newPassword: "Uusi salasana",
				confirmPassword: "Vahvista uusi salasana",
				successMessage: "Lompakon salasana on vaihdettu onnistuneesti",
				change: "Vaihda",
				passwordNotMatchTitle: "Hups!",
				passwordNotMatchMessage: "Syöttämäsi salasana ja salasanan vahvistus eivät vastaa toisiaan. Varmista, että syötät uuden salasanasi oikein."
			},
			changeAccountLabel: {
				title: "Vaihda tilin nimi",
				label: "Tilin nimi",
				wallet: "Lompakko",
				password: "Lompakon salasana",
				successMessage: "Tili {{1}} on nyt merkitty {{2}}",
				change: "Vaihda"
			},
			removeAccount: {
				title: "Poista tili",
				wallet: "Lompakko",
				password: "Lompakon salasana",
				warning: "Varmista, että tilisi on tyhjä ennen kuin positat sen, tai kaikki NEMit poistuvat tililtäsi myös.\n\n",
				successMessage: "Tili {{1}} {{#2}}({{2}}){{/2}} on poistettu",
				remove: "Poistettu"
			},
			nisUnavailable: {
				title: "NIS ei käytettävissä",
				message: "NIS yhteys katkaistu, odotetaan yhdistämistä"
			},
			shutdown: {
				title: "Sulje ohjelma",
				message: "Haluatko sulkea NEM Community Client sovelluksen?"
			},
			activateRemote: {
				title: "Aktivoi etälouhinta (Remote harvesting)",
				wallet: "Lompakko",
				account: "Tili",
				hoursDue: "Maksettavaksi (tunnit)",
				password: "Lompakon salasana",
				activate: "Aktivoi"
			},
			deactivateRemote: {
				title: "Lopeta etälouhinta (Remote harvesting)",
				wallet: "Lompakko",
				account: "Tili",
				hoursDue: "Maksettavaksi (tunnit)",
				password: "Lompakon salasana",
				deactivate: "Katkaise yhteys"
			},
			startRemote: {
				title: "Aloita etälouhinta (Remote harvesting)",
				wallet: "Lompakko",
				account: "Tili",
				password: "Lompakon salasana",
				start: "Käynnistä"
			},
			stopRemote: {
				title: "Lopeta etälouhinta (Remote harvesting)",
				wallet: "Lompakko",
				account: "Tili",
				password: "Lompakon salasana",
				stop: "Pysäytä"
			},
			logoutWarning: {
				leavePage: "Olet poistumassa lompakostasi. Jos poistut näin, on toisilla tämän tietokoneen käyttäjillä mahdollisuus käyttää lompakkoasi. Poistu lompakosta \"close wallet\"\ntoiminnolla menu pudotusvalikosta, joka sijaitsee ruudun oikeassa yläkulmassa, ennen kuin suljet selaimen."
			}
		},
		landing: {
			logo: "images/nem_logo.png",
			importSuccess: "Lompakko on tuotu onnistuneesti!",
			nav: {
				start: "Aloitussivu",
				about: "NEM tietoja",
				settings: "Asetukset"
			},
			main: {
				leftTitle: "Uusi <em>NEM</em>?",
				leftButton: "Luo uusi lompakko",
				walletNamePlh: "Lompakkosi nimi",
				passwordPlh: "Salasana",
				confirmPasswordPlh: "Vahvista salasana",
				create: "Luo",
				creating: "Luodaan...",
				rightTitle: "Oletko jo <em>NEM</em>ber?",
				rightButton: "Avaa lompakkosi",
				openButton: "Avaaa",
				walletsFound: "Löydetty <strong>{{1}}</strong> <em>wallet(s)</em>",
				copyright: "Kuvaaja <em>Cas Cornelissen</em>"
			},
			carousel: {
				items: [
					{
						title: "NCC salaa lompakkosi",
						description: "<em>Security</em> on erittäin tärkeää, että kolikkoja ja assetteja ei varasteta."
					},
					{
						title: "NCC salaa lompakkosi",
						description: "<em>Security</em> on erittäin tärkeää, että kolikkoja ja assetteja ei varasteta."
					}
				]
			},
			about: {
				sections: [
					{
						title: "Miten NCC toimii?",
						paragraphs: [
							"<strong>NCC</strong> luo yhteyden assetteihisi ja NEM tilillesi, kuin perinteinen lompakko. Voit",
							"<strong>NCC</strong> requires access to an <strong>NIS</strong> Palvelin toimintavalmis. Normaalisti paikallinen palvelin on aktiivinen (se on asennettu NCC:n kanssa <strong>NCC</strong>)",
							"Voit myös konfiguroida pääsyn etäpalvelimelle <strong>NIS</strong>."
						],
						listItems: [
							"Useita lompakoita",
							"Määritä useita tilejä, jotka voivat olla lompakossasi"
						]
					},
					{
						title: "Mikä on &#42;NIS?",
						paragraphs: [
							"Tämä komponentti pitää cloud-palvelun <strong>NEM</strong> käynnissä.",
							"Suurempi <strong>NIS</strong> turvallisuus on parempi.",
							"<strong>NIS</strong> on yhdyspiste <strong>NEM</strong> cloudiin."
						],
						legend: "<strong>&#42;NIS</strong> tarkoittaa <strong>NEM Infrastructure Server</strong>"
					}
				]
			},
			footer: {
				copyright: "&copy; Copyright 2014. NEM Community Client."
			}
		},
		wallet: {
			logo: "images/nem_logo.png",
			lastAccess: "Noin {{1}} päivää sitten",
			lastAccessJustNow: "Juuri nyt",
			lastAccessTooltip: "Viimeinen kirjautuminen oli {{1}}",
			primary: "Ensisijainen",
			primaryShort: "P",
			noLabel: "<No label>",
			copiedToClipboard: "Osoite on kopioitu työpöydälle",
			actions: {
				refreshInfo: "Päivitä Info",
				bootLocalNode: "Käynnistä Local Node uudelleen",
				changeWalletName: "Vaihda lompakon nimi",
				changeWalletPassword: "Vaihda lompakon salasana",
				mergeWallets: "Yhdistä lompakot",
				exportWallet: "Vie lompakko",
				createAccount: "Luo uusi lompakko",
				createRealAccountData: "Luo real account data",
				verifyRealAccountData: "Tarkista real account data",
				addAccount: "Lisää olemassaoleva tili",
				changeAccountLabel: "Vahda tilin nimi",
				setPrimary: "Aseta ensisijainen tili",
				removeAccount: "Poista tili",
				clientInfo: "Client Info",
				closeWallet: "Sulje lomakko",
				closeProgram: "Sulje ohjelma",
				copyClipboard: "Kopioi osoite työpöydälle"
			},
			nav: [
				"Etusivu",
				"Viesti",
				"Yhteystiedot",
				"Siirrot",
				"Louhitut lohkot (Harvested blocks)",
				"Asset Exchange",
				"Uutiset",
				"Sovellukset",
				"Tilit",
				"Asetukset",
				"Sulje ohjelma"
			],
			bootNodeWarning: "Local node täytyy käynnistää uudelleen, että saat kaikki\nominaisuudet käyttöön kohteessa NCC."
		},
		dashboard: {
			assets: {
				title: "Assettisi"
			},
			importance: {
				title: "Merkittävä määrä",
				unknown: "Tuntematon tila",
				start: "Aloita local harvesting",
				harvesting: "Louhinta (Harvesting)",
				stop: "Lopeta paikallinen louhinta (local harvesting)",
				description: "Tilin merkitys NEM cloud palvelussa",
				remoteHarvest: {
					activate: "Aktovoi eätälouhinta (remote harvesting)",
					activating: "Aktivoidaan etälouhinta (remote harvesting)...",
					active: "Etälouhinta (Remote harvesting) on aktiivinen",
					deactivate: "Lopeta etälouhinta (remote harvesting)",
					deactivating: "Lopetetaan etälouhinta (remote harvesting)...",
					startRemoteHarvesting: "Käynnistä etälouhinta (remote harvesting)",
					remotelyHarvesting: "Aloita louhinta (harvesting)",
					stopRemoteHarvesting: "Pysäytä etälouhinta (remote harvesting)"
				}
			},
			transactions: {
				title: "Viimeisimmät siirrot",
				sendNem: "Lähetä NEM",
				balance: "Tämänhetkinen saldo",
				syncStatus: "(at block {{1}}{{#2}} : est. {{3}} days behind{{/2}})",
				unknown: "Tuntematon",
				columns: [
					"",
					"Aika",
					"Lähettäjä/Vastaanottaja",
					"Viesti",
					"",
					"Tiedot",
					"Vahvistukset",
					"Palkkio",
					"Summa"
				],
				types: {
					pending: "Viiästyneet siirrot",
					outgoing: "Lähtevät siirrot",
					incoming: "Saapuvat siirrot",
					self: "Automaattinen siirto"
				},
				noMessage: "Ei viestiä",
				encrypted: "Viesti on salattu",
				view: "Näytä",
				confirmationsUnknown: "Tuntematon",
				pending: "Viivästynyt",
				seeAll: "Näytä kaikki siirrot",
				noTransactions: "Siirtoja ei ole vielä tehty"
			},
			nemValue: {
				title: "NEM arvon staistiiikka"
			},
			messages: {
				titleTooltip: "Viesti"
			},
			news: {
				titleTooltip: "Uutiset"
			},
			notAvailable: "Ei ole saatavilla beta versiossa"
		},
		transactions: {
			title: "Siirrot",
			sendNem: "Lähetä NEM",
			balance: "Tämänhetkinen saldo",
			filters: {
				confirmed: "Vahvistettu",
				unconfirmed: "Vahvistamaton",
				incoming: "Saapuva",
				outgoing: "Lähtevä"
			},
			table: {
				columns: [
					"",
					"Aika",
					"Lähettäjä/Vastaanottaja",
					"Viesti",
					"",
					"Tiedot",
					"Vahvistuksia",
					"Palkkio",
					"Summa"
				],
				types: {
					pending: "Viivästyneet siirrot",
					outgoing: "Lähtevät siirrot",
					incoming: "Saapuvat siirrot",
					self: "Automaattiset siirrot"
				},
				noMessage: "Ei viestiä",
				encrypted: "Viesti on salattu",
				view: "Näytä",
				confirmationsUnknown: "Tuntematon",
				pending: "Viivästynyt",
				noTransactions: "Siirtoja ei ole vielä tehty",
				loading: "Lataa lisää siirtoja..."
			}
		},
		harvestedBlocks: {
			title: "Louhitut lohkot (Harvested blocks)",
			feeEarned: "Ansaittuja palkkioita 25 viimeisestä louhitusta lohkosta\n(harvested blocks)",
			unknown: "Tuntematon",
			table: {
				columns: [
					"Korkeus",
					"Aika",
					"Lohkon hash",
					"Palkkio"
				],
				noBlocks: "Yhtään lohkoa ei ole vielä louhittu",
				loading: "Ladataan lisää louhittuja lohkoja (harvested blocks)"
			},
			harvesting: {
				unknown: "Tuntematon tila",
				start: "Aloita paikallinen louhinta (local harvesting)",
				harvesting: "Louhinta (Harvesting)",
				stop: "Lopeta paikallinen louhinta (local harvesting)",
				remoteHarvest: {
					startRemoteHarvesting: "Käynnistä etälouhinta (remote harvesting)",
					stopRemoteHarvesting: "Lopeta etälouhinta (remote harvesting)"
				}
			}
		},
		settings: {
			title: "Asetukset",
			settings: [
				{
					name: "Kieli"
				}
			],
			save: "Tallenna muutokset",
			saveSuccess: "Asetukset on tallennettu onnistuneesti"
		}
	}
});