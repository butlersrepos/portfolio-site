navigation-bar
    navigation-link(description="About Me", url="aboutme", icon="info-circle")
    navigation-link(description="Resumé", url="resume", icon="file-text")
    navigation-link(description="Works", url="works", icon="folder-open")

    style(scoped="scoped").
        :scope {
            width: 100vw;
            position: absolute;
            top: 0;
            left: 0;
            height: 10vh;
            box-shadow: 0px 5px 20px #bbb;
            display: flex;
            align-items: stretch;
        }