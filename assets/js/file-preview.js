function ekUpload() {
    function Init() {
        // fileSelect.addEventListener('change', fileSelectHandler, false);

        // Is XHR2 available?
        var xhr = new XMLHttpRequest();
        if (xhr.upload) {
            // File Drop
            $(".file-preview").on('dragover dragleave', fileDragHover);
            $(".file-preview").on('drop', fileSelectHandler);
            $(".file-preview").on('click', function (e) {
                $("#file-upload").data('eventInstance', e);
                $('#file-upload').click();  
            });
            $('#file-upload').on('change', fileSelectHandler);
        }
    }

    function fileDragHover(e) {

        e.stopPropagation();
        e.preventDefault();

        $(e.target).css("opacity", (e.type === 'dragover' ? '0.5' : '1'));
    }

    function fileSelectHandler(e) {
        let files = e.target.files || e.originalEvent.dataTransfer.files;

        fileDragHover(e);

        for (var i = 0, f; f = files[i]; i++) {
            parseFile(f, (e.type === 'drop' ? e : $("#file-upload").data('eventInstance')));
        }
    }

    function parseFile(file, e) {

        let isGood = (/\.(?=gif|jpg|png|jpeg)/gi).test(file.name);
        if (isGood) {
            $(e.target).attr("src", URL.createObjectURL(file))
            $('#file-upload').val('');
            $('#file-upload').removeAttr('data-event');
            
        }
        else {
            $('#file-upload').val('');
            $('#file-upload').removeAttr('data-event');
            alert("Format file tidak cocok");
            alert("Format file yang cocok: gif, png, jpg, jpeg");
        }
    }

    function setProgressMaxValue(e) {
        var pBar = document.getElementById('file-progress');

        if (e.lengthComputable) {
            pBar.max = e.total;
        }
    }

    function updateFileProgress(e) {
        var pBar = document.getElementById('file-progress');

        if (e.lengthComputable) {
            pBar.value = e.loaded;
        }
    }

    function uploadFile(file) {

        var xhr = new XMLHttpRequest(),
            fileInput = document.getElementById('class-roster-file'),
            pBar = document.getElementById('file-progress'),
            fileSizeLimit = 1024; // In MB
        if (xhr.upload) {
            // Check if file is less than x MB
            if (file.size <= fileSizeLimit * 1024 * 1024) {
                // Progress bar
                pBar.style.display = 'inline';
                xhr.upload.addEventListener('loadstart', setProgressMaxValue, false);
                xhr.upload.addEventListener('progress', updateFileProgress, false);

                // File received / failed
                xhr.onreadystatechange = function (e) {
                    if (xhr.readyState == 4) {
                        // Everything is good!

                        // progress.className = (xhr.status == 200 ? "success" : "failure");
                        // document.location.reload(true);
                    }
                };

                // Start upload
                xhr.open('POST', document.getElementById('file-upload-form').action, true);
                xhr.setRequestHeader('X-File-Name', file.name);
                xhr.setRequestHeader('X-File-Size', file.size);
                xhr.setRequestHeader('Content-Type', 'multipart/form-data');
                xhr.send(file);
            } else {
                output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
            }
        }
    }

    // Check for the various File API support.
    if (window.File && window.FileList && window.FileReader) {
        Init();
    } else {
        document.getElementById('file-drag').style.display = 'none';
    }
}
ekUpload();