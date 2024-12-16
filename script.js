const files =[ 'document1.txt', 'presentation1.pdf', 
    'song1.mp3', 'installer1.exe', 'archive1.rar',
     'report1.docx', 'image1.jpg', 'graphic1.png', 
     'animation1.gif'];
   
 const fileIcon = { '.txt': 'https://via.placeholder.com/200?text=TXT',
    '.pdf': 'https://via.placeholder.com/200?text=PDF',
    '.mp3': 'https://via.placeholder.com/200?text=MP3',
    '.exe': 'https://via.placeholder.com/200?text=EXE',
    '.rar': 'https://via.placeholder.com/200?text=RAR',
    '.docx': 'https://via.placeholder.com/200?text=DOCX',
    '.jpg': 'https://via.placeholder.com/200?text=JPG',
    '.png': 'https://via.placeholder.com/200?text=PNG',
    '.gif': 'https://via.placeholder.com/200?text=GIF',
    '.zip': 'https://via.placeholder.com/200?text=ZIP',
    };    

    const folders = categorizeFiles(files);

// DOM elements
const foldersContainer = document.getElementById('folders');
const fileListContainer = document.getElementById('fileList');

// Display folders
displayFolders();

// Function to categorize files
function categorizeFiles(files) {
    const categorized = {};
    files.forEach(file => {
        if (!categorized[file.type]) categorized[file.type] = [];
        categorized[file.type].push(file);
    });
    return categorized;
}

// Display folders in DOM
function displayFolders() {
    foldersContainer.innerHTML = '';
    Object.keys(folders).forEach(type => {
        const folderDiv = document.createElement('div');
        folderDiv.className = 'folder';
        folderDiv.textContent = ${type.toUpperCase()} Files (${folders[type].length});
        folderDiv.onclick = () => displayFiles(type);
        foldersContainer.appendChild(folderDiv);
    });
}

// Display files for a selected folder
function displayFiles(type) {
    fileListContainer.innerHTML = '';
    folders[type].forEach(file => {
        const fileDiv = document.createElement('div');
        fileDiv.className = 'file';
        fileDiv.textContent = ${file.name} (${file.type});
        fileListContainer.appendChild(fileDiv);
    });
}

// Search files
function searchFiles() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    fileListContainer.innerHTML = '';

    Object.keys(folders).forEach(type => {
        folders[type]
            .filter(file => file.name.toLowerCase().includes(query))
            .forEach(filteredFile => {
                const fileDiv = document.createElement('div');
                fileDiv.className = 'file';
                fileDiv.textContent = ${filteredFile.name} (${filteredFile.type});
                fileListContainer.appendChild(fileDiv);
            });
    });
}

// Sorting files
