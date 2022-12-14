export {};

declare global {
  export namespace ZionTypes {
    export namespace Zion {
      export type StateDepartments =
        | "learn"
        | "design"
        | "build"
        | "communication"
        | "trade";
      export type Tokens = "ERC721" | "ERC1155" | "ERC20" | "zNFT";
      export type Unique721 = "copyright" | "intellectual-properties";
      export type Licences = "commercial" | "private";
      export type ArtDomain = "music" | "visual" | "cooking";
      export type Domain = "physical" | "digital";
      export type MusicPhysicalSupport =
        | "vinyl"
        | "cd"
        | "cassette"
        | "mini-disk"
        | "ADAT";
      export type VinylFormats = "12'" | "9'" | "7'";
      export type Product = "pfp" | "album" | "single";
      export type ContractTypes =
        | "profile"
        | "product"
        | "service"
        | "equipment";
      export type ProjectDepartments =
        | "research"
        | "development"
        | "production"
        | "marketing"
        | "distribution"
        | "care";
      export type CreatorTypes =
        | "artist"
        | "studio"
        | "label"
        | "collective"
        | "promoter"
        | "project"
        | "company"
        | "supplier"
        | "distributor"
        | "sound-system";
      export type ServiceTypes = "tutoring" | "performance" | "coding";
      export type PerformanceTypes = "concert" | "tour";
      export type PerformanceVenues =
        | "club"
        | "hangar"
        | "warehouse"
        | "concert-hall";
      export type VideoStraminServices = "youtube" | "twitch";
      export type zNftFeatures = "share" | "governance";
      export type MarketSaleType = "OrderBook" | "AMM" | "BondingCurve" | "OTC";
      export type MintTokenShopTypes = "Whitelist" | "Invitation";
      // find a way to list the type of selection of the pre order
      export type PremintingTypes = "Casual" | "Manual";
      export type MintingType = "pre-minted" | "on-the-fly";
      export type GovernanceTypes = "Moloko" | "Governor";
      export type ProductVisualization = `${Product}_${Visualization}`;
      export type ProductVisualizationOfTokens =
        `${ProductVisualization}_${Tokens}`;

      export type Visualization = "card" | "page" | "popup";

      export enum zNFTBagdes {
        user = "user",
        creator = "creator",
        project = "project",
        product = "product",
        launchpad = "launchpad",
        label = "label",
        brand = "brand",
        developer = "developer",
        musicGig = "musicGig",
        studio = "studio",
        soundService = "sound service",
        soundSystem = "sound system",
        club = "club",
        singer = "singer",
        instrmentalist = "instrumentalist",
        soundEngineer = "sound engineer",
        producer = "producer",
        manager = "manager",
        dj = "dj",
        liveAct = "live act",
        livePerformer = "live performer",
        recodingArtist = "recording artist",
        songWriter = "song writer",
        beatMaker = "beat maker",
        author = "author",
        composer = "composer",
        soundDesigner = "sound designer", // meglio fare sound designer, o mettere un campo designer e mettere i vari tipi
        visualArtist = "visual artist",
        _2dDesigner = "2d designer",
        _3dDesigner = "3d designer",
        sofDev = "software developer",
        sofDes = "software designer",
        tutor = "tutor",
        streamer = "streamer",
        preformer = "performer",
        comCourier = "community courier",
        commTextSup = "community textile supplier",
        commPrinSup = "community print supplier",
        commVinylSup = "community vinyl press plant",
        gamer = "gamer",
        activist = "activist",
        recorderMusic = "recorded music",
        textileManif = "textile manifacturer",
        printHouse = "printHouse",
        pressingPlant = "pressingPlant",
        courier = "courier",
        stockNode = "stock node",
        homeNode = "home node",
        clubNode = "club node",
        studioNode = "studio node",
        soundSystemNode = "sound system node",
        fullStackNode = "full stack node",
        promoter = "promoter",
        bookingAgent = "booking agent",
        bookingAgenct = "booking agency",
        tastManager = "task manager",
        serviceProvider = "service provide",
        DAO = "DAO",
        zProducer = "zNFT Producer",
        artist = "artist",
        curator = "curator",
        startup = "start-up",
      }
    }
  }
}
